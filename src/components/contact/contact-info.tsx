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
            <div className="bg-primary/10 p-3 rounded-lg shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Learning Center</h3>
              <p className="text-gray-600 leading-relaxed">
                {siteConfig?.address ||
                  "456 Education Way, Learning District, Boston, MA 02110"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-secondary/10 p-3 rounded-xl shrink-0">
              <Mail className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Student Support</h3>
              <p className="text-gray-600">
                {siteConfig?.email || "learn@auralearn.edu"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-xl shrink-0">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Speak with an Advisor
              </h3>
              <p className="text-gray-600">
                {siteConfig?.phone || "+1 (800) LEARN-NOW"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-accent/10 p-3 rounded-xl shrink-0">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Advisor Availability
              </h3>
              <p className="text-gray-600">
                {siteConfig?.working_hours || "Mon - Sat, 8:00 AM - 8:00 PM"}
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
