import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample array of computer courses
const courses = [
  {
    title: "Introduction to Computer Science",
    description: "Learn the basics of computer science, algorithms, and problem-solving.",
    link: "/courses/intro-to-computer-science",
    image: "/img/1.jpg", // Replace with your actual image path
  },
  {
    title: "Data Structures and Algorithms",
    description: "Understand the fundamental data structures and algorithms used in programming.",
    link: "/courses/data-structures",
    image: "/img/3.jpg",
  },
  {
    title: "Web Development",
    description: "A comprehensive guide to building modern websites using HTML, CSS, and JavaScript.",
    link: "/courses/web-development",
    image: "/img/4.jpg",
  },
  {
    title: "Machine Learning",
    description: "Explore machine learning concepts, algorithms, and tools for data-driven predictions.",
    link: "/courses/machine-learning",
    image: "/img/5.jpg",
  },
  {
    title: "Operating Systems",
    description: "Learn how operating systems work, their architecture, and how they manage resources.",
    link: "/courses/operating-systems",
    image: "/img/6.jpg",
  },
  {
    title: "Database Management Systems",
    description: "Learn about databases, SQL, and how data is stored, retrieved, and managed.",
    link: "/courses/database-management",
    image: "/img/7.jpg",
  },
];

const Courses = () => {
  return (
   <section className='my-10'>
     <div>
     <div className='text-center max-w-xl mx-auto mb-6'>
     <h1 className="text-3xl font-semibold mb-3 text-center">Available Computer Courses</h1>
     <p className='text-sm'>At ComputoAkash, you don't just learn code — you engage in practical exercises that reflect real-world scenarios. From beginner-friendly lessons to advanced courses trusted by professionals, we prepare you for real-world projects.</p>
     </div>
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card key={index} className="hover:shadow-lg p-0 transition-shadow">
          <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-t-md" />
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{course.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <Button as="a" href={course.link} className="w-full mb-5">
              Enroll Now
            </Button>
          </CardFooter>
        </Card>
        
        ))}
      </div>
    </div>
   </section>
  );
}

export default Courses;
