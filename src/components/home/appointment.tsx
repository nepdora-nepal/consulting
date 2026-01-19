"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CalendarIcon, Clock, Loader2 } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  useGetAppointmentReasons,
  useSubmitAppointmentForm,
} from "@/hooks/use-appointment";
import { AppointmentReason } from "@/types/appointment";

const formSchema = z.object({
  full_name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  reason_id: z.string().min(1, {
    message: "Please select a reason for your appointment.",
  }),
  date: z.string().min(1, {
    message: "Please select a date.",
  }),
  time: z.string().min(1, {
    message: "Please select a time.",
  }),
  message: z.string().optional(),
});

const Appointment = () => {
  const { data: reasons, isLoading: isLoadingReasons } =
    useGetAppointmentReasons();
  const { mutate: submitAppointment, isPending: isSubmitting } =
    useSubmitAppointmentForm();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      message: "",
      date: "",
      time: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitAppointment(
      {
        ...values,
        reason_id: parseInt(values.reason_id),
        status: "pending",
      },
      {
        onSuccess: () => {
          form.reset();
        },
      },
    );
  }

  return (
    <section className="py-20 bg-white" id="appointment">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Context */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Schedule a Consultation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ready to take your business to the next level? Book a
                personalized consultation with our experts. We&apos;ll discuss
                your goals, challenges, and create a tailored roadmap for
                success.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Flexible Timing
                </h3>
                <p className="text-sm text-gray-600">
                  Choose a slot that works best for your schedule. We offer
                  consultations across multiple time zones.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CalendarIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Quick Confirmation
                </h3>
                <p className="text-sm text-gray-600">
                  Receive instant confirmation and a calendar invite with
                  meeting details immediately after booking.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <Card className="shadow-lg border-gray-100">
            <CardHeader>
              <CardTitle>Book Your Slot</CardTitle>
              <CardDescription>
                Fill out the form below to secure your appointment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+1 (555) 000-0000"
                              type="tel"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="reason_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason for Visit</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a reason" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {isLoadingReasons ? (
                              <SelectItem value="loading" disabled>
                                Loading reasons...
                              </SelectItem>
                            ) : (
                              reasons?.map((reason: AppointmentReason) => (
                                <SelectItem
                                  key={reason.id}
                                  value={reason.id.toString()}
                                >
                                  {reason.name}
                                </SelectItem>
                              ))
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Date</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              {...field}
                              min={format(new Date(), "yyyy-MM-dd")}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us briefly about your business needs..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      "Confirm Appointment"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
