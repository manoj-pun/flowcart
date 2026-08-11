import { stats, products, weeklySales, days } from "@/data/dashboard";

export default function DashboardPage() {
    const maxSale = Math.max(...weeklySales);

    return (
        <div className="p-5 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-5">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                    <div className="text-sm text-gray-600">Total Orders</div>
                    <div className="text-2xl font-bold">{stats.totalOrders.toLocaleString()}</div>
                </div>

                <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                    <div className="text-sm text-gray-600">Revenue</div>
                    <div className="text-2xl font-bold">{stats.revenue}</div>
                </div>

                <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
                    <div className="text-sm text-gray-600">Customers</div>
                    <div className="text-2xl font-bold">{stats.customers.toLocaleString()}</div>
                </div>

                <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                    <div className="text-sm text-gray-600">Avg Order Value</div>
                    <div className="text-2xl font-bold">{stats.avgOrderValue}</div>
                </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 mb-8">
                <h2 className="text-lg font-semibold mb-4">Weekly Sales</h2>
                <div className="flex items-end gap-2 h-64">
                    {weeklySales.map((sale, index) => {
                        const heightPercentage = (sale / maxSale) * 100;
                        return (
                            <div key={index} className="flex flex-col items-center flex-1 h-full justify-end">
                                <div
                                    className="w-full bg-indigo-600 rounded-t"
                                    style={{
                                        height: `${heightPercentage}%`,
                                        minHeight: "4px",
                                        transition: "height 0.3s ease"
                                    }}
                                ></div>
                                <div className="text-xs mt-2 text-gray-600">{days[index]}</div>
                                <div className="text-xs text-gray-400">Rs {sale.toLocaleString()}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h2 className="text-lg font-semibold mb-4">Products</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b-2 border-gray-200">
                                <th className="px-4 py-3 text-left text-sm">Product</th>
                                <th className="px-4 py-3 text-left text-sm">Price</th>
                                <th className="px-4 py-3 text-left text-sm">Stock</th>
                                <th className="px-4 py-3 text-left text-sm">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-b border-gray-100">
                                    <td className="px-4 py-3">{product.name}</td>
                                    <td className="px-4 py-3">{product.price}</td>
                                    <td className="px-4 py-3">{product.stock}</td>
                                    <td className="px-4 py-3">
                                        <span className={`
                                            px-2 py-1 rounded text-xs font-medium
                                            ${product.status === "In Stock" ? "bg-green-100 text-green-800" : ""}
                                            ${product.status === "Low Stock" ? "bg-yellow-100 text-yellow-800" : ""}
                                            ${product.status === "Out of Stock" ? "bg-red-100 text-red-800" : ""}
                                        `}>
                                            {product.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}