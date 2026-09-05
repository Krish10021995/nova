export const revenueSeries = [
  { month: "Jan", revenue: 18400, subscriptions: 920, churn: 2.1 },
  { month: "Feb", revenue: 21200, subscriptions: 1044, churn: 1.9 },
  { month: "Mar", revenue: 19850, subscriptions: 968, churn: 2.4 },
  { month: "Apr", revenue: 24700, subscriptions: 1185, churn: 1.7 },
  { month: "May", revenue: 26900, subscriptions: 1280, churn: 1.6 },
  { month: "Jun", revenue: 30400, subscriptions: 1430, churn: 1.4 },
  { month: "Jul", revenue: 33200, subscriptions: 1550, churn: 1.5 },
  { month: "Aug", revenue: 39100, subscriptions: 1800, churn: 1.2 },
];

export const trafficSeries = [
  { day: "Mon", visits: 12400 },
  { day: "Tue", visits: 14800 },
  { day: "Wed", visits: 13900 },
  { day: "Thu", visits: 16200 },
  { day: "Fri", visits: 15100 },
  { day: "Sat", visits: 9800 },
  { day: "Sun", visits: 8700 },
];

export const channels = [
  { name: "Organic search", value: 42, color: "var(--chart-1)" },
  { name: "Direct", value: 26, color: "var(--chart-2)" },
  { name: "Referral", value: 18, color: "var(--chart-3)" },
  { name: "Social", value: 10, color: "var(--chart-4)" },
  { name: "Email", value: 4, color: "var(--chart-5)" },
];

export const topProducts = [
  { name: "Analytics Pro", revenue: "18,420", users: 1240, growth: "+12.4%" },
  { name: "Team Spaces", revenue: "12,880", users: 985, growth: "+9.1%" },
  { name: "Automations", revenue: "9,640", users: 812, growth: "+18.7%" },
  { name: "Reports", revenue: "6,310", users: 660, growth: "+4.2%" },
  { name: "API Access", revenue: "4,975", users: 540, growth: "+7.6%" },
];

export const recentActivity = [
  {
    id: "1",
    actor: "Ava Chen",
    action: "started the report",
    target: "Q3 Revenue Deep-Dive",
    time: "2m ago",
    initials: "AC",
  },
  {
    id: "2",
    actor: "Liam Okafor",
    action: "shared",
    target: "Activation funnel",
    time: "18m ago",
    initials: "LO",
  },
  {
    id: "3",
    actor: "Sofia Marino",
    action: "invited 4 teammates to",
    target: "Growth Squad",
    time: "1h ago",
    initials: "SM",
  },
  {
    id: "4",
    actor: "Noah Patel",
    action: "exported",
    target: "Monthly analytics.csv",
    time: "3h ago",
    initials: "NP",
  },
  {
    id: "5",
    actor: "Mia Tanaka",
    action: "commented on",
    target: "Checkout conversion",
    time: "5h ago",
    initials: "MT",
  },
];

export const kpiCards = [
  {
    title: "Monthly Recurring Revenue",
    value: "$39,100",
    delta: "+12.4%",
    trend: "up",
    caption: "vs previous month",
  },
  {
    title: "Active Users",
    value: "4,892",
    delta: "+8.1%",
    trend: "up",
    caption: "vs previous month",
  },
  {
    title: "Conversion Rate",
    value: "6.4%",
    delta: "+0.9%",
    trend: "up",
    caption: "signup → paid",
  },
  {
    title: "Churn Rate",
    value: "1.2%",
    delta: "-0.3%",
    trend: "down",
    caption: "vs previous month",
  },
];