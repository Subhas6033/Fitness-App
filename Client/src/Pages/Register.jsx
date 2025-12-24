import { useState } from "react";
import { Input, Select, Button, Card } from "../Components";
import useBackgroundSlice from "../Hooks/BgHook";

// Steps info
const steps = [
  { id: 1, title: "Personal Info", subtitle: "Basic information about you" },
  { id: 2, title: "Body Metrics", subtitle: "Your height & weight" },
  { id: 3, title: "Fitness Goal", subtitle: "What you want to achieve" },
  { id: 4, title: "Fitness Level", subtitle: "Your experience level" },
  { id: 5, title: "Workout Location", subtitle: "Where you train" },
  { id: 6, title: "Diet Preferences", subtitle: "Your eating habits" },
  { id: 7, title: "Health Info", subtitle: "Optional medical details" },
];

export default function RegisterUserData() {
  const { colors, currentBackground, isDark } = useBackgroundSlice();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
    fitnessLevel: "",
    location: "",
    diet: "",
    medical: "",
    stress: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.age) newErrors.age = "Age is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
    }
    if (step === 2) {
      if (!formData.height) newErrors.height = "Height is required";
      if (!formData.weight) newErrors.weight = "Weight is required";
    }
    if (step === 3 && !formData.goal) newErrors.goal = "Select a goal";
    if (step === 4 && !formData.fitnessLevel)
      newErrors.fitnessLevel = "Select fitness level";
    if (step === 5 && !formData.location)
      newErrors.location = "Select workout location";
    if (step === 6 && !formData.diet) newErrors.diet = "Select diet preference";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => validateStep() && setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = () => {
    if (!validateStep()) return;
    console.log("FINAL FORM DATA:", formData);
    alert("🎉 Form Submitted Successfully!");
  };

  return (
    <div
      className={`min-h-screen flex transition-colors duration-500 ${currentBackground}`}
    >
      {/* Sidebar for the Overview of Input details*/}
      <aside
        className={`hidden md:flex w-72 flex-col p-6 border-r-2 ${
          isDark
            ? "border-white/50 text-slate-100 text-lg"
            : "border-gray-200 text-gray-950"
        }`}
      >
        <div className="space-y-3">
          {steps.map((s) => (
            <div
              key={s.id}
              className={`px-4 py-3 rounded-xl text-sm transition
                ${
                  step === s.id
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "opacity-60"
                }
              `}
            >
              <p className="text-sm">Step {s.id}</p>
              <p className="font-medium">{s.title}</p>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Section */}
      <main className="flex-1 flex items-center justify-center px-6">
        <Card className="w-full max-w-lg">
          {/* Mobile Progress */}
          <div className="md:hidden mb-6">
            <div className="flex justify-between text-xs mb-2">
              <span className={`${colors.textColor}`}>
                {steps[step - 1].title}
              </span>
              <span className={`${colors.textColor}`}>
                {step}/{steps.length}
              </span>
            </div>
            <div className="h-2 bg-black/10 rounded-full">
              <div
                className="h-2 bg-emerald-400 rounded-full transition-all"
                style={{ width: `${(step / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className={`text-3xl font-bold ${colors.textColor}`}>
              {steps[step - 1].title}
            </h2>
            <p className={colors.textLightColor}>{steps[step - 1].subtitle}</p>
          </div>

          {/* Steps */}
          {step === 1 && (
            <div className="space-y-4">
              <Input
                label="Full Name"
                name="name"
                error={errors.name}
                onChange={handleChange}
              />
              <Input
                label="Age"
                type="number"
                name="age"
                error={errors.age}
                onChange={handleChange}
              />
              <Select
                label="Gender"
                name="gender"
                error={errors.gender}
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Input
                label="Height (cm)"
                name="height"
                error={errors.height}
                onChange={handleChange}
              />
              <Input
                label="Weight (kg)"
                name="weight"
                error={errors.weight}
                onChange={handleChange}
              />
            </div>
          )}

          {step === 3 && (
            <Select
              label="Fitness Goal"
              name="goal"
              error={errors.goal}
              onChange={handleChange}
            >
              <option value="">Select goal</option>
              <option value="weight-loss">Weight Loss</option>
              <option value="muscle-gain">Muscle Gain</option>
              <option value="endurance">Endurance</option>
            </Select>
          )}

          {step === 4 && (
            <Select
              label="Fitness Level"
              name="fitnessLevel"
              error={errors.fitnessLevel}
              onChange={handleChange}
            >
              <option value="">Select level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </Select>
          )}

          {step === 5 && (
            <Select
              label="Workout Location"
              name="location"
              error={errors.location}
              onChange={handleChange}
            >
              <option value="">Select location</option>
              <option value="home">Home</option>
              <option value="gym">Gym</option>
              <option value="outdoor">Outdoor</option>
            </Select>
          )}

          {step === 6 && (
            <Select
              label="Diet Preference"
              name="diet"
              error={errors.diet}
              onChange={handleChange}
            >
              <option value="">Select diet</option>
              <option value="veg">Vegetarian</option>
              <option value="non-veg">Non-Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="keto">Keto</option>
            </Select>
          )}

          {step === 7 && (
            <div className="space-y-4">
              <Input
                label="Medical History (Optional)"
                name="medical"
                onChange={handleChange}
              />
              <Select
                label="Stress Level (Optional)"
                name="stress"
                onChange={handleChange}
              >
                <option value="">Select stress</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button variant="secondary" onClick={prevStep}>
                Back
              </Button>
            )}

            {step < 7 ? (
              <Button className="ml-auto" onClick={nextStep}>
                Next →
              </Button>
            ) : (
              <Button className="ml-auto" onClick={handleSubmit}>
                Submit 🚀
              </Button>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
}
