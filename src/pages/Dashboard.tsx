import React, { useMemo, useState } from "react";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar, { DashboardKey } from "@/components/dashboard/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const titles: Record<DashboardKey, string> = {
  overview: "Overview (Home)",
  "properties.list": "Property List",
  "properties.add": "Add Property",
  "properties.details": "Property Details",
  "leads.all": "All Leads",
  "leads.qualified": "Qualified Leads",
  "leads.pending": "Pending Applications",
  "leads.analytics": "Lead Analytics",
  "applications.active": "Active Applications",
  "applications.screening": "Screening Results",
  "applications.documents": "Document Review",
  "applications.approvals": "Approval Queue",
  "showings.scheduled": "Scheduled Showings",
  "showings.calendar": "Calendar View",
  "showings.history": "Showing History",
  "analytics.performance": "Performance Metrics",
  "analytics.conversion": "Lead Conversion",
  "analytics.time": "Time Savings",
  "analytics.revenue": "Revenue Impact",
  "settings.account": "Account Settings",
  "settings.rules": "Screening Rules",
  "settings.integrations": "Integrations",
  "settings.billing": "Billing",
  "support.help": "Help Center",
  "support.contact": "Contact Support",
  "support.api": "API Documentation",
};

function Section({ heading, children }: { heading: string; children?: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold tracking-tight mb-4">{heading}</h2>
      {children}
    </section>
  );
}

export default function Dashboard() {
  const [active, setActive] = useState<DashboardKey>("overview");

  const pageTitle = useMemo(
    () => `AI Landlord Dashboard – ${titles[active]}`,
    [active]
  );

  const renderOverview = () => (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Qualified Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">24</p>
          <p className="text-sm text-muted-foreground">Last 7 days</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Avg. Response Time</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">1.2s</p>
          <p className="text-sm text-muted-foreground">AI chatbot responses</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Scheduled Showings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-muted-foreground">Upcoming week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Time Saved</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">+13h</p>
          <p className="text-sm text-muted-foreground">Estimated vs. manual</p>
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Lead Funnel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-40 rounded-md bg-muted" aria-label="Lead funnel chart placeholder" />
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>New lead from Zillow • 2m ago</li>
            <li>Screening completed • 18m ago</li>
            <li>Showing scheduled • 36m ago</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  const renderSimple = (heading: string, description: string) => (
    <Section heading={heading}>
      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Section>
  );

  const content: Partial<Record<DashboardKey, React.ReactNode>> = {
    overview: (
      <>
        <Section heading="Quick Overview">{renderOverview()}</Section>
      </>
    ),
    "properties.list": renderSimple(
      "Property List",
      "View and manage all properties connected to AI Landlord."
    ),
    "properties.add": renderSimple(
      "Add Property",
      "Create a new property and configure unit-level screening rules."
    ),
    "properties.details": renderSimple(
      "Property Details",
      "Inspect property performance, units, leads, and applications."
    ),
    "leads.all": renderSimple(
      "All Leads",
      "Unified inbox of leads captured from Zillow, Craigslist, Facebook, SMS, and email."
    ),
    "leads.qualified": renderSimple(
      "Qualified Leads",
      "Applicants who meet your screening criteria based on AI scoring."
    ),
    "leads.pending": renderSimple(
      "Pending Applications",
      "Leads that started but haven’t completed applications or screening."
    ),
    "leads.analytics": renderSimple(
      "Lead Analytics",
      "Analyze lead sources, qualification rates, and conversion performance."
    ),
    "applications.active": renderSimple(
      "Active Applications",
      "Track in-progress applications across all properties and units."
    ),
    "applications.screening": renderSimple(
      "Screening Results",
      "FCRA-compliant reports via SmartMove with AI-generated summaries."
    ),
    "applications.documents": renderSimple(
      "Document Review",
      "Securely review pay stubs, IDs, and other applicant documents."
    ),
    "applications.approvals": renderSimple(
      "Approval Queue",
      "AI recommendations and final approval workflow for leases."
    ),
    "showings.scheduled": renderSimple(
      "Scheduled Showings",
      "Upcoming showings with automatic confirmations and reminders."
    ),
    "showings.calendar": renderSimple(
      "Calendar View",
      "See showings synced with Google Calendar and Calendly."
    ),
    "showings.history": renderSimple(
      "Showing History",
      "Archive of completed showings with outcomes and notes."
    ),
    "analytics.performance": renderSimple(
      "Performance Metrics",
      "Monitor response times, screening throughput, and pipeline health."
    ),
    "analytics.conversion": renderSimple(
      "Lead Conversion",
      "Measure conversion rates from lead to showing to approved lease."
    ),
    "analytics.time": renderSimple(
      "Time Savings",
      "Quantify hours saved compared to manual processes."
    ),
    "analytics.revenue": renderSimple(
      "Revenue Impact",
      "Estimate ROI from faster leasing and higher-quality tenants."
    ),
    "settings.account": renderSimple(
      "Account Settings",
      "Manage profile, team access, and notification preferences."
    ),
    "settings.rules": renderSimple(
      "Screening Rules",
      "Customize qualification criteria like income multiple, credit score, and policies."
    ),
    "settings.integrations": renderSimple(
      "Integrations",
      "Connect Twilio (SMS), SmartMove (screening), Calendly (scheduling), SendGrid (email)."
    ),
    "settings.billing": renderSimple(
      "Billing",
      "View plans, invoices, and update payment methods."
    ),
    "support.help": renderSimple(
      "Help Center",
      "Browse guides, FAQs, and best practices for AI Landlord."
    ),
    "support.contact": renderSimple(
      "Contact Support",
      "Get assistance from our team via email or chat."
    ),
    "support.api": renderSimple(
      "API Documentation",
      "Explore endpoints, webhooks, and developer guides."
    ),
  };

  return (
    <PageLayout showContact={false}>
      <SEO
        title={pageTitle}
        description="AI Landlord dashboard: manage properties, leads, applications, showings, analytics, and settings in one place."
      />
      <SidebarProvider>
        <div className="flex w-full min-h-screen pt-16">
          <Sidebar collapsible="icon">
            <AppSidebar activeKey={active} onSelect={setActive} />
          </Sidebar>

          <SidebarInset>
            <header className="h-14 border-b flex items-center gap-3 px-4">
              <SidebarTrigger />
              <h1 className="text-lg font-semibold">AI Landlord Dashboard</h1>
            </header>
            <main className="p-4">
              {content[active]}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </PageLayout>
  );
}
