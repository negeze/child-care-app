"use client"

import { useState } from "react"

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    parentPhone: "",
    parentAddress: "",
    childFirstName: "",
    childLastName: "",
    childDOB: "",
    childGender: "",
    allergies: "",
    specialNeeds: "",
    programType: "",
    startDate: "",
    daysPerWeek: "",
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelation: "",
    agreedToTerms: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step === 4) {
      console.log("Form submitted:", formData)
      alert("Thank you for enrolling! We will contact you shortly.")
      setStep(1)
      setFormData({
        parentFirstName: "",
        parentLastName: "",
        parentEmail: "",
        parentPhone: "",
        parentAddress: "",
        childFirstName: "",
        childLastName: "",
        childDOB: "",
        childGender: "",
        allergies: "",
        specialNeeds: "",
        programType: "",
        startDate: "",
        daysPerWeek: "",
        emergencyName: "",
        emergencyPhone: "",
        emergencyRelation: "",
        agreedToTerms: false,
      })
    } else {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
              ♥
            </div>
            <span className="font-bold text-lg text-foreground">Bright Kids Care</span>
          </div>
          <a href="/" className="text-foreground hover:text-primary transition">
            Back to Home
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition ${
                      stepNum <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {stepNum}
                  </div>
                  {stepNum < 4 && (
                    <div className={`w-12 h-1 mx-2 transition ${stepNum < step ? "bg-primary" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-foreground/70">
              <span>Parent Info</span>
              <span>Child Info</span>
              <span>Program</span>
              <span>Confirm</span>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <form onSubmit={handleSubmit}>
              {/* Step 1 */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Parent Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="parentFirstName"
                        value={formData.parentFirstName}
                        onChange={handleInputChange}
                        required
                        placeholder="First Name"
                        className="px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                      />
                      <input
                        type="text"
                        name="parentLastName"
                        value={formData.parentLastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Last Name"
                        className="px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                      />
                    </div>
                    <input
                      type="email"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleInputChange}
                      required
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                    />
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleInputChange}
                      required
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                    />
                    <input
                      type="text"
                      name="parentAddress"
                      value={formData.parentAddress}
                      onChange={handleInputChange}
                      required
                      placeholder="Address"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                    />
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Child Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="childFirstName"
                        value={formData.childFirstName}
                        onChange={handleInputChange}
                        required
                        placeholder="First Name"
                        className="px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                      />
                      <input
                        type="text"
                        name="childLastName"
                        value={formData.childLastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Last Name"
                        className="px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                      />
                    </div>
                    <input
                      type="date"
                      name="childDOB"
                      value={formData.childDOB}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                    />
                    <select
                      name="childGender"
                      value={formData.childGender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleInputChange}
                      placeholder="Known Allergies"
                      rows={3}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                    />
                    <textarea
                      name="specialNeeds"
                      value={formData.specialNeeds}
                      onChange={handleInputChange}
                      placeholder="Special Needs or Notes"
                      rows={3}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                    />
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Program Enrollment</h2>
                  <div className="space-y-4">
                    <select
                      name="programType"
                      value={formData.programType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                    >
                      <option value="">Select a program</option>
                      <option value="infant">Infant Care (6 months - 12 months)</option>
                      <option value="toddler">Toddler Program (1-3 years)</option>
                      <option value="preschool">Preschool (3-5 years)</option>
                    </select>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                    />
                    <select
                      name="daysPerWeek"
                      value={formData.daysPerWeek}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                    >
                      <option value="">Select days per week</option>
                      <option value="1">1 Day/Week</option>
                      <option value="2">2 Days/Week</option>
                      <option value="3">3 Days/Week</option>
                      <option value="4">4 Days/Week</option>
                      <option value="5">5 Days/Week (Full-Time)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Emergency Contact & Confirmation</h2>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground">Emergency Contact</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="emergencyName"
                          value={formData.emergencyName}
                          onChange={handleInputChange}
                          required
                          placeholder="Name"
                          className="px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                        />
                        <input
                          type="text"
                          name="emergencyRelation"
                          value={formData.emergencyRelation}
                          onChange={handleInputChange}
                          required
                          placeholder="Relationship"
                          className="px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                        />
                      </div>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        required
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary bg-background text-foreground"
                      />
                    </div>

                    <div className="bg-secondary/5 p-4 rounded-lg space-y-3">
                      <h3 className="font-semibold text-foreground">Summary</h3>
                      <div className="text-sm space-y-2 text-foreground/70">
                        <p>
                          <span className="font-medium">Parent:</span> {formData.parentFirstName}{" "}
                          {formData.parentLastName}
                        </p>
                        <p>
                          <span className="font-medium">Child:</span> {formData.childFirstName} {formData.childLastName}
                        </p>
                        <p>
                          <span className="font-medium">Program:</span> {formData.programType}
                        </p>
                        <p>
                          <span className="font-medium">Start Date:</span> {formData.startDate}
                        </p>
                        <p>
                          <span className="font-medium">Days/Week:</span> {formData.daysPerWeek}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="agreedToTerms"
                        id="terms"
                        checked={formData.agreedToTerms}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                      <label htmlFor="terms" className="text-sm text-foreground">
                        I agree to the terms and conditions and understand the enrollment policies
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 1}
                  className="flex-1 px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition bg-transparent"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
                >
                  {step === 4 ? "Complete Enrollment" : "Next"}
                </button>
              </div>
            </form>
          </div>

          <p className="text-center text-sm text-foreground/60 mt-8">
            Need help? Contact us at info@brightkidscare.com or call (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  )
}
