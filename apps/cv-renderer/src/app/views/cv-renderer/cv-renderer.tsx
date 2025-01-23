import ContentSection from "./components/content-section/content-section";
import HeaderSection from "./components/header-section/header-section";

export function CvRenderer() {
  return (
    <main>
      <HeaderSection />
      <div>
        <ContentSection />
      </div>
    </main>
  );
}

export default CvRenderer;
