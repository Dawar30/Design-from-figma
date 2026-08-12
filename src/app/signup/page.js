import SignupHero from "@/components/signup/SignupHero";
import SignupForm from "@/components/signup/SignupForm";

export const metadata = {
  title: "Create your account — Maktab-e-Jahan",
  description: "Start your academic journey today with Maktab-e-Jahan.",
};

export default function SignupPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <SignupHero />

      <section className="flex items-center justify-center bg-slate-100 px-4 py-10 sm:px-8 sm:py-14">
        <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-panel sm:p-10 md:p-12">
          <div className="flex justify-center">
            <SignupForm />
          </div>
        </div>
      </section>
    </main>
  );
}
