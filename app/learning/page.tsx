import { BookOpen } from "lucide-react";
import { PageShell } from "@/app/components/page-shell";

const courses = [
  { title: "Design systems modernes", trainer: "Alicia Laurent", duration: "2h 30", level: "Intermédiaire" },
  { title: "Next.js pour produits SaaS", trainer: "Sophie Martin", duration: "4h", level: "Avancé" },
  { title: "Leadership produit", trainer: "Omar Benali", duration: "1h 45", level: "Débutant" },
];

export default function LearningPage() {
  return (
    <PageShell>
      <div className="rounded-lg border border-[#E0DFDC] bg-white p-4 shadow-sm ring-1 ring-black/5">
        <div className="flex items-center gap-2">
          <BookOpen size={18} className="text-[#0A66C2]" />
          <h2 className="text-[16px] font-semibold text-[#191919]">LinkedIn Learning</h2>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.title} className="rounded-lg border border-[#E0DFDC] p-3">
              <p className="text-[15px] font-semibold text-[#191919]">{course.title}</p>
              <p className="mt-2 text-sm text-[#666666]">{course.trainer}</p>
              <div className="mt-3 flex items-center justify-between text-sm text-[#333333]">
                <span>{course.duration}</span>
                <span>{course.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
