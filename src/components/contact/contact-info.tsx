"use client";

import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteConfig } from "@/hooks/use-site-config";

export default function ContactInfo() {
  const { data: siteConfig } = useSiteConfig();

  return (
    <div className="lg:col-span-1 space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Contact Information
        </h2>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-xl shrink-0">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Our Office</h3>
              <p className="text-gray-600 leading-relaxed">
                {siteConfig?.address ||
                  "123 Business Ave, Suite 500, New York, NY 10001"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-xl shrink-0">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email Us</h3>
              <p className="text-gray-600">
                {siteConfig?.email || "hello@aurumconsulting.com"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-xl shrink-0">
              <Phone className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Call Us</h3>
              <p className="text-gray-600">
                {siteConfig?.phone || "+1 (555) 000-0000"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-xl shrink-0">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Working Hours</h3>
              <p className="text-gray-600">
                {siteConfig?.working_hours || "Mon - Fri, 9:00 AM - 6:00 PM"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-4 pt-4">
        <h2 className="text-lg font-bold text-gray-900">Follow Us</h2>
        <div className="flex gap-4">
          {siteConfig?.linkedin_url && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-gray-200"
              asChild
            >
              <a
                href={siteConfig.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-blue-700" />
              </a>
            </Button>
          )}
          {siteConfig?.twitter_url && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-gray-200"
              asChild
            >
              <a
                href={siteConfig.twitter_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5 text-sky-500" />
              </a>
            </Button>
          )}
          {siteConfig?.facebook_url && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-gray-200"
              asChild
            >
              <a
                href={siteConfig.facebook_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </a>
            </Button>
          )}
          {siteConfig?.instagram_url && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-gray-200"
              asChild
            >
              <a
                href={siteConfig.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-pink-600" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
