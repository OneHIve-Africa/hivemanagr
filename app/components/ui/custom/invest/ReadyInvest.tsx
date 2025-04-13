import React, { useState } from "react";
import back from "~/assets/back2.png";
import { Button } from "../../button";
import { useToast } from "~/hooks/use-toast";
import { useSubmit } from "@remix-run/react";
import { Send, CheckCircle } from "lucide-react";
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

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  location: string;
  joinWaitlist: boolean;
}

const ReadyInvest: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const submit = useSubmit();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "Investing in Beekeeping", // Pre-selected for investors
    message: "",
    location: "",
    joinWaitlist: false,
  });

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
        description:
          "Thank you for your interest in investing. We'll get back to you soon.",
        variant: "default",
      });
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

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, joinWaitlist: checked }));
  };

  return (
    <div
      className="px-5 md:px-10 lg:px-[198px] py-16 uid bg-oha__green bg-cover bg-center flex justify-center items-center text-white h-auto md:h-[800px]"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="w-full grid md:grid-cols-2 items-center gap-6 md:gap-20 lg:p-20 uid">
        <div className="grid gap-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-start mt-4 mb-6 md:mt-6 md:mb-8">
            Ready to Invest in the Future?
          </h1>
          <p className="text-lg lg:text-2xl font-normal leading-loose lg:w-[600px]">
            Explore the opportunities on our platform today and be part of a
            movement that{"’"}s making a real difference. Your investment is
            more than just a financial decision—it{"’"}s a commitment to a
            better world.
          </p>
          <div>
            <Button
              className="bg-white text-oha__green rounded-md shadow font-semibold text-lg px-8 py-4 md:px-10 md:py-7"
              onClick={() => setShowModal(true)}
            >
              Invest
            </Button>
          </div>
        </div>
        <div></div>
        <div></div>
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-start mt-4 mb-6 md:mt-6 md:mb-8">
            Start Your Journey Today
          </h1>
          <p className="text-lg lg:text-2xl font-normal leading-loose lg:w-[600px]">
            Invest in hives. Invest in communities. Invest in the future. Join
            One Hive Africa and be part of a new way to invest—where profit
            meets purpose.
          </p>
        </div>
      </div>

      {/* Investment Form Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md md:max-w-xl bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold mb-2">
              Invest with One Hive Africa
            </DialogTitle>
            <DialogDescription>
              Complete the form below to learn about our investment
              opportunities that combine financial returns with social impact.
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
                placeholder="Tell us about your investment interests and goals..."
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
                Join our waitlist for exclusive investment opportunities and
                updates
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
                  <span>Submit Investment Interest</span>
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
              Investment Interest Received!
            </DialogTitle>
            <DialogDescription className="text-center">
              Thank you for your interest in investing with One Hive Africa. Our
              team will review your information and reach out to discuss
              potential investment opportunities.
              {formData.joinWaitlist &&
                " We've also added you to our waitlist for exclusive investment opportunities."}
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

export default ReadyInvest;
