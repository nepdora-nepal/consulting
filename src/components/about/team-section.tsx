"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { useTeamMembers } from "@/hooks/use-team-member";
import { Skeleton } from "@/components/ui/skeleton";
import { TEAM } from "@/types/team-member";

const TeamSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="space-y-4">
        <Skeleton className="aspect-[4/5] w-full rounded-lg" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    ))}
  </div>
);

export default function TeamSection() {
  const { data: team, isLoading: isLoadingTeam } = useTeamMembers();

  return (
    <section className="py-24 bg-white" id="team">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-center md:text-left">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest">
              Our Leadership
            </h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900">
              Meet the experts behind{" "}
              <span className="text-blue-600">our success.</span>
            </h3>
            <p className="text-lg text-gray-500 font-medium">
              A diverse group of strategic thinkers, data scientists, and
              industry veterans dedicated to your growth.
            </p>
          </div>
        </div>

        {isLoadingTeam ? (
          <TeamSkeleton />
        ) : team && team.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {team.map((member: TEAM) => (
              <div key={member.id} className="group space-y-6">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl shadow-gray-100 group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={member.photo || "/placeholder-avatar.png"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl flex justify-center gap-4 shadow-xl">
                      {member.linkedin && (
                        <Link
                          href={member.linkedin}
                          className="text-gray-400 hover:text-blue-700 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Link>
                      )}
                      {member.twitter && (
                        <Link
                          href={member.twitter}
                          className="text-gray-400 hover:text-sky-500 transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </Link>
                      )}
                      {member.email && (
                        <Link
                          href={`mailto:${member.email}`}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 font-medium line-clamp-2">
                    {member.about ||
                      "Passionate about delivering excellence and building future-ready client solutions."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-lg border border-gray-100 italic font-medium text-gray-400">
            Our team directory is being updated. Stay tuned!
          </div>
        )}
      </div>
    </section>
  );
}
