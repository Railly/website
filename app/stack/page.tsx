import TechSection from "@/components/sections/tech-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { techSections } from "@/utils/data";


export default function Stack() {
  return (
    <div className="flex flex-col gap-4 min-h-max">
      <Tabs className="flex flex-col gap-2" defaultValue="programming-languages">
        <TabsList>
          {Object.keys(techSections).map((key) => (
            <TabsTrigger key={key} value={key}>{techSections[key as keyof typeof techSections].title}</TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(techSections).map(([key, value]) => (
          <TabsContent key={key} value={key}>
            <TechSection title={value.title} techArray={value.data} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
