function TeamMember({ member }) {
  try {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition" data-name="team-member" data-file="components/TeamMember.js">
        <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold mb-2 text-[var(--primary-color)]">{member.name}</h3>
          <p className="text-gray-600">{member.role}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('TeamMember component error:', error);
    return null;
  }
}