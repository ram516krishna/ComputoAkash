import React, { useState } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { loginSchema, signupSchema } from "@/schemas/authSchema";


const Login = () => {
  const [tab, setTab] = useState("login");
  const navigate = useNavigate();

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const [loginErrors, setLoginErrors] = useState({});
  const [signupErrors, setSignupErrors] = useState({});

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    name: '',
    fatherName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    age: '',
    gender: 'male'
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleGenderChange = (value) => {
    setSignupData({ ...signupData, gender: value });
  };

  const handleLoginSubmit = async () => {
    setIsLoggingIn(true);
    setLoginErrors({});

    const result = loginSchema.safeParse(loginData);
    if (!result.success) {
      const fieldErrors = result.error.format();
      setLoginErrors(fieldErrors);
      setIsLoggingIn(false);
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/student/login`, loginData);
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
        setLoginData({ email: "", password: "" });
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Login failed.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSignupSubmit = async () => {
    setIsSigningUp(true);
    setSignupErrors({});

    const result = signupSchema.safeParse(signupData);
    if (!result.success) {
      const fieldErrors = result.error.format();
      setSignupErrors(fieldErrors);
      setIsSigningUp(false);
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/student/signup`, signupData);
      if (res.data.success) {
        toast.success(res.data.message);
        setSignupData({
          name: '',
          fatherName: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
          age: '',
          gender: 'male'
        });
        setTab('login');
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Signup failed.");
    } finally {
      setIsSigningUp(false);
    }
  };


  return (
    <div className='p-5'>
      <Tabs defaultValue="login" value={tab} onValueChange={setTab} className='mx-auto max-w-2xl w-full my-10'>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>

        {/* Login Tab */}
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Access your account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Email"
                  value={loginData.email}
                  onChange={handleLoginChange}

                />
                {loginErrors.email && (
                  <p className="text-red-500 text-sm">{loginErrors.email._errors[0]}</p>
                )}
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
                {loginErrors.password && (
                  <p className="text-red-500 text-sm">{loginErrors.password._errors[0]}</p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleLoginSubmit} disabled={isLoggingIn}>
                {isLoggingIn ? "Please wait..." : "Login"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Signup Tab */}
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>Create a new account.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mb-5'>
                <div className='space-y-1'>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" type="text" placeholder="Your Name"
                    value={signupData.name}
                    onChange={handleSignupChange}
                  />
                  {signupErrors.name && (
                    <p className="text-red-500 text-sm">{signupErrors.name._errors[0]}</p>
                  )}
                </div>
                <div className='space-y-1'>
                  <Label htmlFor="fatherName">Father's Name</Label>
                  <Input id="fatherName" name="fatherName" type="text" placeholder="Father's Name"
                    value={signupData.fatherName}
                    onChange={handleSignupChange}
                  />
                  {signupErrors.fatherName && (
                  <p className="text-red-500 text-sm">{signupErrors.fatherName._errors[0]}</p>
                )}
                </div>
              </div>

              <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mb-5'>
                <div className="space-y-1">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" name="age" type="number" placeholder="Age"
                    value={signupData.age}
                    onChange={handleSignupChange}
                  />
                  {signupErrors.age && (
                  <p className="text-red-500 text-sm">{signupErrors.age._errors[0]}</p>
                )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Phone Number"
                    value={signupData.phone}
                    onChange={handleSignupChange}
                  />
                  {signupErrors.phone && (
                  <p className="text-red-500 text-sm">{signupErrors.phone._errors[0]}</p>
                )}
                </div>
              </div>

              <div className="space-y-1 mb-5">
                <Label>Gender</Label>
                <RadioGroup value={signupData.gender} onValueChange={handleGenderChange}>
                  <div className="flex space-x-4">
                    {["male", "female", "other"].map((g) => (
                      <div className='flex items-center gap-2' key={g}>
                        <RadioGroupItem value={g} id={g} />
                        <Label htmlFor={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
                {signupErrors.gender && (
                  <p className="text-red-500 text-sm">{signupErrors.gender._errors[0]}</p>
                )}
              </div>

              <div className="space-y-1 mb-5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                />
                {signupErrors.email && (
                  <p className="text-red-500 text-sm">{signupErrors.email._errors[0]}</p>
                )}
              </div>

              <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" placeholder="Password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                  />
                  {signupErrors.password && (
                  <p className="text-red-500 text-sm">{signupErrors.password._errors[0]}</p>
                )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                  />
                  {signupErrors.confirmPassword && (
                  <p className="text-red-500 text-sm">{signupErrors.confirmPassword._errors[0]}</p>
                )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleSignupSubmit}
                disabled={isSigningUp}
              >
                {isSigningUp ? "Please wait..." : "Sign up"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Login;
