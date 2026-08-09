import { CalendarDays, MapPin } from "lucide-react";
import { PageShell } from "@/app/components/page-shell";

const events = [
  { title: "Product Design Meetup", date: "12 sept • 18:30", location: "En ligne", attendees: "184 participants" },
  { title: "AI for Product Teams", date: "20 sept • 16:00", location: "Paris", attendees: "89 participants" },
  { title: "Frontend Leaders Summit", date: "2 oct • 09:00", location: "Lyon", attendees: "211 participants" },
];

export default function EventsPage() {
  return (
    <PageShell>
      <div className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
        <div className="flex items-center gap-2">
          <CalendarDays size={18} className="text-[#0A66C2]" />
          <h2 className="text-[16px] font-semibold text-[#191919]">Événements à venir</h2>
        </div>
        <div className="mt-4 space-y-3">
          {events.map((event) => (
            <div key={event.title} className="rounded-lg border border-[#E0DFDC] p-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0A66C2]">
                <CalendarDays size={14} />
                <span>{event.date}</span>
              </div>
              <p className="mt-2 text-[15px] font-semibold text-[#191919]">{event.title}</p>
              <div className="mt-2 flex items-center gap-2 text-sm text-[#666666]">
                <MapPin size={14} />
                <span>{event.location}</span>
              </div>
              <p className="mt-2 text-sm text-[#333333]">{event.attendees}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
