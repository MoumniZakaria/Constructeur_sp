"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "@/hooks/use-translation"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export function ContactSection() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS integration will be added here
      // For now, simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))
      
      setSubmitStatus("success")
      
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.info.address"),
      value: "C. Occidente, 19242 Hiendelaencina, Guadalajara, España",
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: "+34 643 516 352",
    },
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "contacto@ilmati.es",
    },
    {
      icon: Clock,
      title: t("contact.info.hours"),
      value: "Lun-Sáb: 8:00 AM - 6:00 PM",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">{t("contact.form.submit")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t("contact.form.name")}</Label>
                  <Input id="name" name="name" required className="mt-1 border border-solid border-black" />
                </div>

                <div>
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input id="email" name="email" type="email" required className="mt-1 border border-solid border-black" />
                </div>

                <div>
                  <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                  <Input id="phone" name="phone" type="tel" required className="mt-1 border border-solid border-black" />
                </div>

                <div>
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea id="message" name="message" rows={4} required className="mt-1 border border-solid border-black" />
                </div>

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" disabled={isSubmitting}>
                  {isSubmitting ? (
                    t("contact.form.sending")
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t("contact.form.submit")}
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <p className="text-green-600 text-center font-medium">{t("contact.form.success")}</p>
                )}

                {submitStatus === "error" && (
                  <p className="text-red-600 text-center font-medium">{t("contact.form.error")}</p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              )
            })}

            {/* Google Maps Embed - Ilmati Construcciones */}
            <div className="mt-8">
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8234567891!2d-3.0071051!3d41.0823674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd437b4d2d41530b%3A0x1fe5d2da37475cc7!2sIlmati%20construcciones!5e0!3m2!1sen!2ses!4v1693827456789!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Ilmati Construcciones - Hiendelaencina, Guadalajara"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Ilmati Construcciones - Hiendelaencina, Guadalajara
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}