import { getSettingsData } from "@/lib/sanity/queries";
import ContactComponent from "./ContactComponent";

export default async function Page() {
  const settings: SettingsType | null = await getSettingsData();

  return (
    <main>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full">
          <ContactComponent settings={settings || undefined} />
        </div>
      </div>
    </main>
  );
}
