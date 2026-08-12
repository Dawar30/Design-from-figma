"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import IconButton from "@/components/ui/IconButton";
import { GoogleIcon, AppleIcon } from "@/components/icons/BrandIcons";
import { useToggle } from "@/hooks/useToggle";

/**
 * Right-hand account creation form. Owns the email/password field state and the
 * password visibility toggle. Submission is stubbed (no backend in this build).
 */
export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { value: showPassword, toggle: togglePassword } = useToggle(false);

  function handleSubmit(event) {
    event.preventDefault();
    // Hook up to an auth provider here.
  }

  return (
    <div className="w-full max-w-md">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Create your account
        </h2>
        <p className="mt-2 text-base text-slate-500">
          Start your academic journey today.
        </p>
      </div>

      {/* Social sign-in */}
      <div className="mt-8 space-y-3">
        <Button variant="outline" size="lg" fullWidth className="rounded-2xl">
          <GoogleIcon size={20} />
          Continue with Google
        </Button>
        <Button variant="outline" size="lg" fullWidth className="rounded-2xl">
          <AppleIcon size={20} className="text-navy-900" />
          Continue with Apple
        </Button>
      </div>

      {/* Divider */}
      <div className="my-7 flex items-center gap-4" role="separator">
        <span className="h-px flex-1 bg-slate-200" />
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Or continue with email
        </span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      {/* Email + password */}
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <Input
          id="email"
          type="email"
          label="Email"
          icon={Mail}
          placeholder="student@university.edu"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          icon={Lock}
          placeholder="••••••••"
          autoComplete="new-password"
          minLength={8}
          hint="Must be at least 8 characters."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          endAdornment={
            <IconButton
              label={showPassword ? "Hide password" : "Show password"}
              onClick={togglePassword}
              className="h-9 w-9"
            >
              {showPassword ? (
                <Eye size={18} aria-hidden="true" />
              ) : (
                <EyeOff size={18} aria-hidden="true" />
              )}
            </IconButton>
          }
        />

        <Button type="submit" size="lg" fullWidth className="mt-1 rounded-2xl">
          Create Account
          <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="focus-ring rounded font-semibold text-brand-700 hover:text-brand-800"
        >
          Login
        </Link>
      </p>

      <p className="mt-6 text-center text-xs leading-relaxed text-slate-400">
        By creating an account, you agree to our{" "}
        <Link href="/terms" className="underline hover:text-slate-600">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline hover:text-slate-600">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
