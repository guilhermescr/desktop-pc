import DockApp from './DockApp';

export default function DockBar() {
  const generateDockApps = () => {
    const apps = Array.from({ length: 12 }, (_, i) => i + 1);
    return apps.map((app) => (
      <DockApp
        key={app}
        src={`app-${String(app)}.png`}
        hasNotification={app < 5}
      />
    ));
  };

  return (
    <section className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl h-16 mb-2 shadow-sm shadow-black/50 flex gap-1 items-center justify-center px-2">
      {generateDockApps()}
    </section>
  );
}
