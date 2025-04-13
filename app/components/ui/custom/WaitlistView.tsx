import React, { useState } from "react";
import { useSubmit } from "@remix-run/react";
import back from "~/assets/back.png";
import { Button } from "../button";
import { CheckCircle, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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

interface WaitlistViewProps {}

const WaitlistView: React.FC<WaitlistViewProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const submit = useSubmit();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "Investing in Beekeeping", // Default value
    message: "",
    location: "",
    joinWaitlist: false,
  });

  const openFormModal = (type: "Sponsor" | "Invest") => {
    // Set the interest based on button clicked
    setFormData((prev) => ({
      ...prev,
      interest:
        type === "Sponsor"
          ? "Partnering with One Hive Africa"
          : "Investing in Beekeeping",
    }));
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create the payload for form submission
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
        description: `Thank you for your interest in ${formData.interest === "Partnering with One Hive Africa" ? "sponsoring" : "investing with"} One Hive Africa.`,
        variant: "default",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "Investing in Beekeeping",
        message: "",
        location: "",
        joinWaitlist: false,
      });
    }, 1000);
  };

  return (
    <div
      className="h-[800px] w-full px-10 md:px-[198px] py-2 bg-oha__yellow bg-cover bg-center flex justify-center items-center text-white"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl font-extrabold text-center w-full">
          Join Us in Harvesting Hope
        </h1>
        <p className="text-center text-wrap text-lg leading-8 lg:w-[750px]">
          This is more than just a platform—it{"'"}s a movement. A movement
          driven by people like you who believe in the power of collective
          impact. Whether you{"'"}re an investor seeking meaningful returns, a
          farmer eager to start a beekeeping journey, or an organization looking
          to make a difference, One Hive Africa welcomes you.
        </p>
        <div className="flex gap-10">
          <Button
            className="bg-white text-oha__green rounded-md shadow font-semibold text-lg px-10 py-7"
            onClick={() => openFormModal("Sponsor")}
          >
            Sponsor
          </Button>
          <Button
            className="bg-oha__green text-white rounded-md shadow font-semibold text-lg px-10 py-7"
            onClick={() => openFormModal("Invest")}
          >
            Invest
          </Button>
        </div>
      </div>

      {/* Form Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md md:max-w-xl bg-white text-gray-900">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold mb-2">
              {formData.interest === "Partnering with One Hive Africa"
                ? "Sponsor One Hive Africa"
                : "Invest with One Hive Africa"}
            </DialogTitle>
            <DialogDescription>
              {formData.interest === "Partnering with One Hive Africa"
                ? "Complete the form below to learn about our sponsorship opportunities that create social impact."
                : "Complete the form below to learn about our investment opportunities that combine financial returns with social impact."}
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
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, interest: value }))
                }
              >
                <SelectTrigger className="h-10 rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green">
                  <SelectValue placeholder="Select your interest" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Investing in Beekeeping">
                    Investing in Beekeeping
                  </SelectItem>
                  <SelectItem value="Partnering with One Hive Africa">
                    Partnering with One Hive Africa
                  </SelectItem>
                  <SelectItem value="Becoming a Beekeeper">
                    Becoming a Beekeeper
                  </SelectItem>
                  <SelectItem value="Learning More">
                    Learning More About Our Initiatives
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
                placeholder={
                  formData.interest === "Partnering with One Hive Africa"
                    ? "Tell us about your sponsorship interests and goals..."
                    : "Tell us about your investment interests and goals..."
                }
                className="min-h-120 rounded-lg border-gray-200 focus:border-oha__green focus:ring-oha__green resize-none"
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
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    joinWaitlist: checked as boolean,
                  }))
                }
                className="text-oha__green focus:ring-oha__green"
              />
              <Label htmlFor="waitlist" className="text-sm text-gray-600">
                Join our waitlist for exclusive{" "}
                {formData.interest === "Partnering with One Hive Africa"
                  ? "sponsorship"
                  : "investment"}{" "}
                opportunities and updates
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full h-10 bg-oha__green hover:bg-oha__green/90 text-white rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>
                    Submit{" "}
                    {formData.interest === "Partnering with One Hive Africa"
                      ? "Sponsorship"
                      : "Investment"}{" "}
                    Interest
                  </span>
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md bg-white text-gray-900">
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
              <CheckCircle className="h-6 w-6" />
            </div>
            <DialogTitle className="text-xl font-semibold text-center">
              {formData.interest === "Partnering with One Hive Africa"
                ? "Sponsorship Interest Received!"
                : "Investment Interest Received!"}
            </DialogTitle>
            <DialogDescription className="text-center">
              Thank you for your interest in{" "}
              {formData.interest === "Partnering with One Hive Africa"
                ? "sponsoring"
                : "investing with"}{" "}
              One Hive Africa. Our team will review your information and reach
              out to discuss potential{" "}
              {formData.interest === "Partnering with One Hive Africa"
                ? "sponsorship"
                : "investment"}{" "}
              opportunities.
              {formData.joinWaitlist &&
                ` We've also added you to our waitlist for exclusive ${formData.interest === "Partnering with One Hive Africa" ? "sponsorship" : "investment"} opportunities.`}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Button
              type="button"
              className="w-full bg-oha__green hover:bg-oha__green/90 text-white"
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

export default WaitlistView;
