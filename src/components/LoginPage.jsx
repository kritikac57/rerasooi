import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/${role.toLowerCase()}/login`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login / Signup As</h2>
        <div className="space-y-4">
          {["Admin", "NGO", "Restaurant", "User"].map((role) => (
            <button
              key={role}
              onClick={() => handleSelect(role)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              {role}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
