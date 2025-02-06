import MetricSender from "@/components/MetricSender";

export default function Home() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Next.js Prometheus Monitoring</h1>
            <MetricSender/>
        </div>
    );
}
