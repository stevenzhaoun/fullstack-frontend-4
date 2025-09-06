import { CircularProgress } from "@mui/material"
import { getOrders } from "../../api/orders.api"
import { useDataLoad } from "../../hooks/useDataLoad"
import type { Order } from "../../types"
import { BarChart } from "@mui/x-charts"

export default function Dashboard() {

    const { isLoading, data } = useDataLoad(getOrders)

    if (isLoading || !data) {
        return <CircularProgress />
    }

    /*
    {
        '2025-01-01': [order1, order2, order3],
        '2025-01-02': [order4, order5, order6],
    }
    */

    const ordersByDate = data.reduce((acc, order) => {
        const date = order.createdAt.split('T')[0]
        if (acc[date]) {
            acc[date].push(order)
        } else {
            acc[date] = [order]
        }
        return acc

    }, {} as Record<string, Order[]>)

    const dates = Object.keys(ordersByDate).sort()

    const seriesData = dates.map((date) => {
        const orders = ordersByDate[date]
        return orders.length
    })

    const series = [{ data: seriesData, label: 'Orders' }]

    return <BarChart
        xAxis={[{ data: dates}]}
        series={series}
        height={300}
    />
}