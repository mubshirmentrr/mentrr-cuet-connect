import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PYQFormData {
  name: string;
  whatsapp: string;
  course: string;
}

const PYQLeadMagnet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<PYQFormData>({
    defaultValues: {
      name: "",
      whatsapp: "",
      course: "",
    },
  });

  const courses = [
    "CUET UG - Science Stream",
    "CUET UG - Commerce Stream", 
    "CUET UG - Arts/Humanities Stream",
    "CUET PG - MBA",
    "CUET PG - MA English",
    "CUET PG - MA Economics",
    "CUET PG - MSc Physics",
    "CUET PG - MSc Chemistry",
    "CUET PG - MSc Mathematics",
    "NCET - All Streams"
  ];

  const onSubmit = (data: PYQFormData) => {
    // Create WhatsApp message with form data
    const message = `Hi! I want to download PYQ materials.
    
Name: ${data.name}
WhatsApp: ${data.whatsapp}
Course: ${data.course}

Please share the PYQ materials. Thank you!`;
    
    const whatsappUrl = `https://wa.me/+917909228688?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    setIsOpen(false);
    form.reset();
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll receive the PYQ materials shortly!",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="mentrr-orange" size="lg" className="gap-3 shadow-lg hover:shadow-xl transition-all duration-300">
          <Download className="h-5 w-5" />
          Download Free PYQ
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-mentrr-navy">
            <FileText className="h-5 w-5" />
            Get Free Previous Year Questions
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-mentrr-green/10 p-4 rounded-lg border border-mentrr-green/20">
            <div className="flex items-start gap-3">
              <BookOpen className="h-5 w-5 text-mentrr-green mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-mentrr-navy mb-2">What you'll get:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 5+ Years Previous Year Questions</li>
                  <li>• Detailed Solutions & Explanations</li>
                  <li>• Topic-wise Question Bank</li>
                  <li>• Instant WhatsApp Delivery</li>
                </ul>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="whatsapp"
                rules={{ 
                  required: "WhatsApp number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter valid 10-digit mobile number"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter 10-digit WhatsApp number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="course"
                rules={{ required: "Please select a course" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Interest</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your course" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course} value={course}>
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" variant="mentrr" size="lg">
                Get PYQ Materials Now
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PYQLeadMagnet;