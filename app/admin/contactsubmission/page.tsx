"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  status: string;
  createdAt: any;
}

export default function ContactSubmissionsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const leadsData: Lead[] = [];
      querySnapshot.forEach((docSnap) => {
        leadsData.push({ id: docSnap.id, ...docSnap.data() } as Lead);
      });
      setLeads(leadsData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const markAsRead = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "new" ? "read" : "new";
    try {
      await updateDoc(doc(db, "leads", id), { status: newStatus });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const deleteLead = async (id: string) => {
    if (confirm("Are you sure you want to delete this lead?")) {
      try {
        await deleteDoc(doc(db, "leads", id));
      } catch (error) {
        console.error("Error deleting lead:", error);
      }
    }
  };

  if (loading) {
    return <div className="text-center py-20 text-zinc-500 animate-pulse">Fetching leads from Firestore...</div>;
  }

  if (leads.length === 0) {
    return <div className="text-center py-20 bg-white rounded-3xl border border-zinc-200 shadow-sm text-zinc-500">No contact submissions found yet.</div>;
  }

  return (
    <div className="flex flex-col gap-4 mt-2">
      <div className="mb-4">
          <h2 className="text-2xl font-bold text-zinc-900">Contact Submissions</h2>
          <p className="text-zinc-500 text-sm mt-1">Manage all leads and inquiries.</p>
      </div>
      {leads.map((lead) => (
        <div 
          key={lead.id} 
          className={`bg-white rounded-2xl p-4 sm:p-6 border transition-all shadow-sm relative flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6
            ${lead.status === 'new' ? 'border-orange-200 shadow-orange-100/50' : 'border-zinc-200'}`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 w-full">
            <div className="lg:w-16 shrink-0 flex items-center">
              {lead.status === 'new' ? (
                <span className="bg-orange-100 text-orange-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md">New</span>
              ) : (
                <span className="bg-zinc-100 text-zinc-500 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md">Read</span>
              )}
            </div>
            <div className="lg:w-64 shrink-0 flex flex-col justify-center">
              <h3 className="text-base font-bold text-zinc-900 leading-tight mb-1">{lead.name}</h3>
              <p className="text-xs text-zinc-500 leading-snug">{lead.email}<br/>{lead.phone}</p>
            </div>
            <div className="lg:w-32 shrink-0 flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">Service</span>
              <span className="text-xs font-medium text-zinc-800 bg-zinc-50 px-2.5 py-1 rounded-lg border border-zinc-100 self-start">{lead.service || 'N/A'}</span>
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">Message</span>
              <div className="text-xs text-zinc-700 leading-relaxed bg-zinc-50 p-3 rounded-xl border border-zinc-100 max-h-[70px] overflow-y-auto whitespace-pre-wrap">
                {lead.message || "No message provided."}
              </div>
            </div>
            <div className="lg:w-24 shrink-0 flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">Date</span>
              <span className="text-xs font-medium text-zinc-800">
                {lead.createdAt?.toDate ? lead.createdAt.toDate().toLocaleDateString() : 'Just now'}
              </span>
            </div>
            <div className="lg:w-auto shrink-0 flex items-center justify-end gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 border-zinc-100">
              <button 
                onClick={() => markAsRead(lead.id, lead.status)}
                className={`px-3 py-1.5 text-[11px] font-bold rounded-full transition-colors border cursor-pointer whitespace-nowrap
                  ${lead.status === 'new' 
                    ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-transparent' 
                    : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border-emerald-200'}`}
              >
                {lead.status === 'new' ? 'Mark Read' : 'Read'}
              </button>
              <button 
                onClick={() => deleteLead(lead.id)}
                className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 text-[11px] font-bold rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
