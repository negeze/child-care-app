"use client"

import { useState } from "react"

interface Service {
  id: string
  name: string
  price: number
  description: string
  category: string
  active: boolean
}

export default function ServiceManagement() {
  const [services, setServices] = useState<Service[]>([
    {
      id: "1",
      name: "Full-Time Care",
      price: 1200,
      description: "9 AM - 5 PM daily childcare",
      category: "core",
      active: true,
    },
    {
      id: "2",
      name: "Part-Time Care",
      price: 700,
      description: "3 days per week, flexible hours",
      category: "core",
      active: true,
    },
    {
      id: "3",
      name: "Music Classes",
      price: 50,
      description: "Weekly music education",
      category: "enrichment",
      active: true,
    },
    {
      id: "4",
      name: "Art Workshop",
      price: 40,
      description: "Creative art sessions",
      category: "enrichment",
      active: false,
    },
  ])

  const [newService, setNewService] = useState({
    name: "",
    price: 0,
    description: "",
    category: "enrichment",
  })

  const handleAddService = () => {
    if (newService.name && newService.price > 0) {
      setServices([
        ...services,
        {
          id: String(services.length + 1),
          ...newService,
          active: true,
        },
      ])
      setNewService({ name: "", price: 0, description: "", category: "enrichment" })
    }
  }

  const toggleService = (id: string) => {
    setServices(services.map((service) => (service.id === id ? { ...service, active: !service.active } : service)))
  }

  return (
    <div className="space-y-6">
      {/* Add New Service */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Add New Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Service name"
            value={newService.name}
            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
            className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50"
          />
          <input
            type="number"
            placeholder="Price ($)"
            value={newService.price}
            onChange={(e) => setNewService({ ...newService, price: Number(e.target.value) })}
            className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50"
          />
          <input
            type="text"
            placeholder="Description"
            value={newService.description}
            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
            className="px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 md:col-span-2"
          />
        </div>
        <button
          onClick={handleAddService}
          className="w-full py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium transition"
        >
          Add Service
        </button>
      </div>

      {/* Services List */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Current Services</h2>
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-border rounded-lg p-4 flex items-start justify-between hover:shadow-md transition"
            >
              <div className="flex-1">
                <h3 className="font-bold text-foreground">{service.name}</h3>
                <p className="text-sm text-foreground/70">{service.description}</p>
                <p className="text-lg font-bold text-primary mt-2">${service.price}</p>
                <span className="inline-block mt-2 text-xs px-2 py-1 bg-secondary/30 text-foreground/70 rounded">
                  {service.category}
                </span>
              </div>
              <button
                onClick={() => toggleService(service.id)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  service.active
                    ? "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-950 dark:text-green-300"
                    : "bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-950 dark:text-red-300"
                }`}
              >
                {service.active ? "Active" : "Inactive"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
