import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useSubmit } from "@remix-run/react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Building2,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { useToast } from "~/hooks/use-toast";
import NavigationHeader from "~/components/ui/custom/Header";
import Footer from "~/components/ui/custom/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  location: string;
  contactMethod: string;
  joinWaitlist: boolean;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const payload = {
    sessionUuid: uuidv4(),
    respondentUuid: uuidv4(),
    responses: {
      "4dbbcb91-95b9-4e58-9254-c28bb6db6c50": formData.get("name"),
      "b48cca7f-bdd1-42a4-a68b-eac877d416c5": formData.get("email"),
      "b8bf7876-dafe-4d36-961e-5b8e6baed154": formData.get("phone"),
      "28edf338-d142-4dbf-a4a8-93bd335042e0": formData.get("location"),
      "0450ac77-87ec-4269-8ded-5cf2af98fd44": formData.get("interest"),
      "0335cb4f-d55e-47f6-9169-26d386eab303": formData.get("message"),
      "5d8d9384-b00f-43a4-a444-2b194f4e72d8":
        formData.get("joinWaitlist") === "true" ? "Yes" : "No",
    },
    captchas: {},
    isCompleted: true,
    password: "",
  };

  try {
    const response = await fetch("https://api.tally.so/forms/3NR7GW/respond", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    return json({ success: true });
  } catch (error) {
    return json(
      { success: false, error: "Failed to submit form" },
      { status: 400 }
    );
  }
};

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const submit = useSubmit();
  const actionData = useActionData();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    location: "",
    contactMethod: "",
    joinWaitlist: false,
  });

  React.useEffect(() => {
    if (actionData) {
      if (actionData) {
        toast({
          title: "Success!",
          description:
            "Thank you for reaching out. We'll get back to you soon.",
          variant: "default",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
          location: "",
          contactMethod: "",
          joinWaitlist: false,
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
    }
  }, [actionData, toast]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    submit(e.currentTarget, { method: "post" });
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, joinWaitlist: checked }));
  };

  return (
    <div>
      <NavigationHeader />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 mt-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Start Something Amazing
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in revolutionizing beekeeping in Africa. Whether you're an
              investor, aspiring beekeeper, or potential partner, we're excited
              to connect with you.
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          className="h-12 rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          className="h-12 rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* Rest of the form fields follow the same pattern - updating with name attribute and proper typing */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          className="h-12 rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          name="location"
                          placeholder="City, Country"
                          className="h-12 rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              location: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">Area of Interest</Label>
                      <Select
                        name="interest"
                        value={formData.interest}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger className="h-12 rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green">
                          <SelectValue placeholder="What brings you to One Hive Africa?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Investing in Beekeeping">
                            Investing in Beekeeping
                          </SelectItem>
                          <SelectItem value="Becoming a Beekeeper">
                            Becoming a Beekeeper
                          </SelectItem>
                          <SelectItem value="Partnering with One Hive Africa">
                            Partnering with One Hive Africa
                          </SelectItem>
                          <SelectItem value="Learning More">
                            Learning More About Your Initiatives
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Share your thoughts with us..."
                        className="min-h-[160px] rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green resize-none"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                      <Checkbox
                        id="waitlist"
                        name="joinWaitlist"
                        checked={formData.joinWaitlist}
                        onCheckedChange={handleCheckboxChange}
                        className="text-oha__green focus:ring-oha__green"
                      />
                      <Label
                        htmlFor="waitlist"
                        className="text-sm text-gray-600"
                      >
                        Join our waitlist for exclusive updates and early access
                        to our platform
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-oha__green hover:bg-oha__green/90 text-white rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                <div className="lg:border-l lg:pl-12 space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-oha__green" />
                      <span>Contact Details</span>
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="w-5 h-5 text-gray-600 mt-1" />
                        <div>
                          <p className="font-medium">Email Us</p>
                          <a
                            href="mailto:contact@onehiveafrica.com"
                            className="text-gray-600 hover:text-oha__green transition-colors"
                          >
                            contact@onehiveafrica.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Phone className="w-5 h-5 text-gray-600 mt-1" />
                        <div>
                          <p className="font-medium">Call Us</p>
                          <a
                            href="tel:+233504464117"
                            className="text-gray-600 hover:text-oha__green transition-colors"
                          >
                            +233 (050) 446-4117
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                        <div>
                          <p className="font-medium">Visit Us</p>
                          <p className="text-gray-600">Nairobi, Kenya</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-oha__green" />
                      <span>Business Hours</span>
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex justify-between text-sm">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <DialogTitle className="text-center text-xl font-semibold">
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-center">
              Thank you for reaching out to One Hive Africa. We'll get back to
              you soon.
              {formData.joinWaitlist &&
                " We've added you to our waitlist and will keep you updated on our progress."}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Button
              type="button"
              className="w-full bg-oha__green hover:bg-oha__green/90"
              onClick={() => setShowSuccessModal(false)}
            >
              Continue Browsing
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
};

export default ContactForm;
