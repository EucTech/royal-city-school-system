import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAccessToken, parseJwt } from "../../ultils/tokenData";


const StudentProfile = () => {
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        setLoading(true);
        const token = getAccessToken();
        const decodedToken = parseJwt(token); // Parse JWT token
        const studentId = decodedToken?.student?.id;
        if (!studentId) {
          throw new Error("Student ID not found in localStorage");
        }
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/student-admin/student/${studentId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
          },
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          toast.success("Student Profile fetched successfully");
          setStudent(data.data);
        } else {
          toast.error("Failed to fetch Student Profile");
        }
      } catch (error) {
        console.error("Failed to fetch Student Profile", error);
        toast.error("Failed to fetch Student Profile");
      } finally {
        setLoading(false);
      }
    };
    fetchStudentProfile();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!student) {
    return <h1>No student found</h1>;
  }

  return (
    <div className="flex flex-col gap-3 items-center justify-center p-4">
      <img className="w-[7em]" src="/Person1.svg" alt="" />
      <div className="flex flex-col">
        <h3><span className="font-medium">FirstName: {student.firstname}</span> </h3>
        <h3><span className="font-medium">MiddleName: {student.middlename}</span> </h3>
        <h3><span className="font-medium">LastName: {student.lastname}</span> </h3>
        <h3><span className="font-medium">Class: {student.student_class}</span> </h3>
      </div>
    </div>
  );
};

export default StudentProfile;
