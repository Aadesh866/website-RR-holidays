"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

const destinations = [
  "Maldives",
  "Bali",
  "Switzerland",
  "Kashmir",
  "Kerala",
  "Andaman",
  "Dubai",
  "Thailand",
  "Other",
]

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    travelers: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string) => {
    return /^\d{10}$/.test(phone)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    // Validation
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required"
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    console.log("Form submitted:", formData)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        date: "",
        travelers: "",
        message: "",
      })
      
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#1a1f4e] mb-2">
          Full Name *
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className={errors.name ? "border-red-500" : ""}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1a1f4e] mb-2">
          Email *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={errors.email ? "border-red-500" : ""}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#1a1f4e] mb-2">
          Phone Number *
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          className={errors.phone ? "border-red-500" : ""}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Destination */}
      <div>
        <label htmlFor="destination" className="block text-sm font-medium text-[#1a1f4e] mb-2">
          Preferred Destination
        </label>
        <select
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="flex h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24] focus-visible:ring-offset-2"
        >
          <option value="">Select a destination</option>
          {destinations.map((dest) => (
            <option key={dest} value={dest}>
              {dest}
            </option>
          ))}
        </select>
      </div>

      {/* Travel Date */}
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-[#1a1f4e] mb-2">
          Travel Date
        </label>
        <Input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      {/* Number of Travelers */}
      <div>
        <label htmlFor="travelers" className="block text-sm font-medium text-[#1a1f4e] mb-2">
          Number of Travelers
        </label>
        <select
          id="travelers"
          name="travelers"
          value={formData.travelers}
          onChange={handleChange}
          className="flex h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24] focus-visible:ring-offset-2"
        >
          <option value="">Select number</option>
          <option value="1-2">1-2</option>
          <option value="3-5">3-5</option>
          <option value="6-10">6-10</option>
          <option value="10+">10+</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1a1f4e] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your dream trip..."
          rows={4}
          className="flex w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-2 text-sm ring-offset-white placeholder:text-[#9ca3af] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24] focus-visible:ring-offset-2"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        rounded="full"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Get My Free Quote"}
      </Button>

      {/* Success Message */}
      {isSuccess && (
        <div
          className="flex items-center gap-2 p-4 bg-[#10b981]/10 border border-[#10b981] rounded-xl text-[#10b981]"
          role="alert"
          aria-live="polite"
        >
          <Check className="w-5 h-5" />
          <span>Thank you! We'll get back to you within 24 hours.</span>
        </div>
      )}
    </form>
  )
}
