import React, { useState } from "react";
import { Button } from "../../button";
import back from "~/assets/beekeeper-lady.png";
import { v4 as uuidv4 } from "uuid";
import { useSubmit } from "@remix-run/react";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
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
import { useToast } from "~/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  location: string;
  joinWaitlist: boolean;
}

const PartnerStories: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const submit = useSubmit();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "Partnering with One Hive Africa", // Pre-selected
    message: "",
    location: "",
    joinWaitlist: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create the payload for Tally
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("location", formData.location);
    formDataObj.append("interest", formData.interest);
    formDataObj.append("message", formData.message);
    formDataObj.append("joinWaitlist", formData.joinWaitlist ? "on" : "off");

    submit(formDataObj, { method: "post" });

    // Simulate successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(false);
      setShowSuccessModal(true);
      toast({
        title: "Success!",
        description: "Thank you for reaching out. We'll get back to you soon.",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "Partnering with One Hive Africa",
        message: "",
        location: "",
        joinWaitlist: false,
      });
    }, 1000);
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, joinWaitlist: checked }));
  };

  return (
    <div className="px-4 sm:px-5 md:px-10 lg:px-[198px] py-8 sm:py-16">
      <div
        className="min-h-[500px] sm:h-auto md:h-[700px] px-4 sm:px-5 md:px-[120px] py-8 sm:py-10 
        bg-oha__green bg-cover bg-center flex justify-start items-end text-white rounded-lg"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="flex flex-col justify-center items-start gap-6 sm:gap-10 pb-8 sm:pb-20">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold w-full">
            Stories of Change
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-8 
            w-full sm:w-[500px] lg:w-[700px]"
          >
            Imagine a farmer in a remote village, who once struggled to make
            ends meet. With your help, she now manages thriving hives, providing
            for her family and contributing to the local economy. This is not
            just a story—it{"'"}s the lived experience of thousands of farmers
            who have benefited from partnerships like yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-10 w-full sm:w-auto">
            <Button
              className="text-white bg-oha__green rounded-md shadow font-semibold 
              text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-7 w-full sm:w-auto"
              onClick={() => setShowModal(true)}
            >
              Partner
            </Button>
          </div>
        </div>
      </div>

      {/* Partner Form Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md md:max-w-xl bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold mb-2">
              Partner with One Hive Africa
            </DialogTitle>
            <DialogDescription>
              Fill out the form below to start your partnership journey with us.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="h-10 rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green"
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
                  className="h-10 rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="h-10 rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green"
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
                  className="h-10 rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green"
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
                <SelectTrigger className="h-10 rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green">
                  <SelectValue placeholder="What brings you to One Hive Africa?" />
                </SelectTrigger>
                <SelectContent className="bg-white">
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
                placeholder="Tell us about your partnership interests..."
                className="min-h-[120px] rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
              />
            </div>

            <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
              <Checkbox
                id="waitlist"
                name="joinWaitlist"
                checked={formData.joinWaitlist}
                onCheckedChange={handleCheckboxChange}
                className="text-oha__green focus:ring-oha__green"
              />
              <Label htmlFor="waitlist" className="text-sm text-gray-600">
                Join our waitlist for exclusive updates and early access to our
                platform
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full h-10 bg-oha__green hover:bg-oha__green/90 text-white rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Partnership Request</span>
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <DialogTitle className="text-center text-xl font-semibold">
              Partnership Request Sent!
            </DialogTitle>
            <DialogDescription className="text-center">
              Thank you for your interest in partnering with One Hive Africa.
              Our team will review your request and get back to you shortly.
              {formData.joinWaitlist &&
                " We've also added you to our waitlist for exclusive updates."}
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
    </div>
  );
};

export default PartnerStories;
