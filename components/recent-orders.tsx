import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    product: "Premium Package",
    amount: "$299.00",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    product: "Standard Package",
    amount: "$199.00",
    status: "pending",
    date: "2024-01-14",
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    product: "Basic Package",
    amount: "$99.00",
    status: "completed",
    date: "2024-01-13",
  },
  {
    id: "ORD-004",
    customer: "Sarah Wilson",
    product: "Premium Package",
    amount: "$299.00",
    status: "processing",
    date: "2024-01-12",
  },
  {
    id: "ORD-005",
    customer: "David Brown",
    product: "Standard Package",
    amount: "$199.00",
    status: "completed",
    date: "2024-01-11",
  },
]

export function RecentOrders() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>Latest orders from your customers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <p className="text-sm font-medium">{order.customer}</p>
                <p className="text-sm text-muted-foreground">{order.product}</p>
                <p className="text-xs text-muted-foreground">{order.date}</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-sm font-medium">{order.amount}</p>
                <Badge
                  variant={
                    order.status === "completed" ? "default" : order.status === "pending" ? "secondary" : "outline"
                  }
                >
                  {order.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
