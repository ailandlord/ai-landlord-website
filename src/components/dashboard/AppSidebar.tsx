import React from "react";
import { NavLink } from "react-router-dom";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Home,
  Building2,
  Users,
  FileText,
  CalendarDays,
  BarChart3,
  Settings,
  LifeBuoy,
  List,
  PlusCircle,
  Info,
  CheckCircle,
  Clock,
  FolderCog,
  FileCheck2,
  Files,
  BadgeCheck,
  History,
  Activity,
  TrendingUp,
  Timer,
  DollarSign,
  UserCog,
  Sliders,
  Plug,
  CreditCard,
  HelpCircle,
  Phone,
  BookOpenText,
} from "lucide-react";

export type DashboardKey =
  | "overview"
  | "properties.list"
  | "properties.add"
  | "properties.details"
  | "leads.all"
  | "leads.qualified"
  | "leads.pending"
  | "leads.analytics"
  | "applications.active"
  | "applications.screening"
  | "applications.documents"
  | "applications.approvals"
  | "showings.scheduled"
  | "showings.calendar"
  | "showings.history"
  | "analytics.performance"
  | "analytics.conversion"
  | "analytics.time"
  | "analytics.revenue"
  | "settings.account"
  | "settings.rules"
  | "settings.integrations"
  | "settings.billing"
  | "support.help"
  | "support.contact"
  | "support.api";

interface Item {
  title: string;
  icon?: React.ComponentType<any>;
  key: DashboardKey | string;
  children?: { title: string; key: DashboardKey; icon?: React.ComponentType<any> }[];
}

const items: Item[] = [
  { title: "Overview (Home)", key: "overview", icon: Home },
  {
    title: "Properties",
    key: "properties",
    icon: Building2,
    children: [
      { title: "Property List", key: "properties.list", icon: List },
      { title: "Add Property", key: "properties.add", icon: PlusCircle },
      { title: "Property Details", key: "properties.details", icon: Info },
    ],
  },
  {
    title: "Leads",
    key: "leads",
    icon: Users,
    children: [
      { title: "All Leads", key: "leads.all", icon: List },
      { title: "Qualified Leads", key: "leads.qualified", icon: CheckCircle },
      { title: "Pending Applications", key: "leads.pending", icon: Clock },
      { title: "Lead Analytics", key: "leads.analytics", icon: Activity },
    ],
  },
  {
    title: "Applications",
    key: "applications",
    icon: FileText,
    children: [
      { title: "Active Applications", key: "applications.active", icon: FolderCog },
      { title: "Screening Results", key: "applications.screening", icon: FileCheck2 },
      { title: "Document Review", key: "applications.documents", icon: Files },
      { title: "Approval Queue", key: "applications.approvals", icon: BadgeCheck },
    ],
  },
  {
    title: "Showings",
    key: "showings",
    icon: CalendarDays,
    children: [
      { title: "Scheduled Showings", key: "showings.scheduled", icon: CalendarDays },
      { title: "Calendar View", key: "showings.calendar", icon: CalendarDays },
      { title: "Showing History", key: "showings.history", icon: History },
    ],
  },
  {
    title: "Analytics",
    key: "analytics",
    icon: BarChart3,
    children: [
      { title: "Performance Metrics", key: "analytics.performance", icon: Activity },
      { title: "Lead Conversion", key: "analytics.conversion", icon: TrendingUp },
      { title: "Time Savings", key: "analytics.time", icon: Timer },
      { title: "Revenue Impact", key: "analytics.revenue", icon: DollarSign },
    ],
  },
  {
    title: "Settings",
    key: "settings",
    icon: Settings,
    children: [
      { title: "Account Settings", key: "settings.account", icon: UserCog },
      { title: "Screening Rules", key: "settings.rules", icon: Sliders },
      { title: "Integrations", key: "settings.integrations", icon: Plug },
      { title: "Billing", key: "settings.billing", icon: CreditCard },
    ],
  },
  {
    title: "Support",
    key: "support",
    icon: LifeBuoy,
    children: [
      { title: "Help Center", key: "support.help", icon: HelpCircle },
      { title: "Contact Support", key: "support.contact", icon: Phone },
      { title: "API Documentation", key: "support.api", icon: BookOpenText },
    ],
  },
];

export function AppSidebar({
  activeKey,
  onSelect,
}: {
  activeKey: DashboardKey;
  onSelect: (key: DashboardKey) => void;
}) {
  return (
    <>
      <SidebarHeader className="px-3 py-2">
        <div className="text-sm font-medium text-muted-foreground">AI Landlord</div>
        <div className="text-base font-semibold">Dashboard</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.key === "overview" ? (
                    <SidebarMenuButton
                      asChild
                      isActive={activeKey === "overview"}
                      tooltip={"Overview"}
                    >
                      <button onClick={() => onSelect("overview")}> 
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </button>
                    </SidebarMenuButton>
                  ) : (
                    <SidebarMenuButton asChild>
                      <div className="flex items-center gap-2">
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </div>
                    </SidebarMenuButton>
                  )}
                  {item.children && (
                    <SidebarMenuSub>
                      {item.children.map((sub) => (
                        <li key={sub.key}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={activeKey === sub.key}
                          >
                            <button onClick={() => onSelect(sub.key)}>
                              {sub.icon && <sub.icon />}
                              <span>{sub.title}</span>
                            </button>
                          </SidebarMenuSubButton>
                        </li>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </>
  );
}

export default AppSidebar;
