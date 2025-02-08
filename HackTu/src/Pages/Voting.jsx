import React from 'react';

function Voting() {
  return (
    <section id="communityVoting" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-4 text-[#81C784]">Community Voice Platform</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Shape your city's future through democratic participation in environmental decisions
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Active Polls Section */}
          <div className="animate__animated animate__fadeInLeft">
            <h3 className="text-2xl font-semibold mb-6">Active Initiatives</h3>
            <div className="space-y-6">
              {/* Poll Item 1 */}
              <div className="bg-neutral-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold">New Recycling Center Location</h4>
                  <span className="bg-[#2E7D32] text-white px-3 py-1 rounded-full text-sm">2 days left</span>
                </div>
                <p className="text-gray-400 mb-6">
                  Vote on the proposed locations for the new community recycling center.
                </p>
                {/* Progress Bars */}
                <div className="space-y-4">
                  {[
                    { name: 'Downtown District', percentage: 45 },
                    { name: 'Riverside Area', percentage: 35 },
                    { name: 'Industrial Zone', percentage: 20 },
                  ].map((poll, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span>{poll.name}</span>
                        <span>{poll.percentage}%</span>
                      </div>
                      <div className="h-2 bg-neutral-700 rounded">
                        <div className="h-full bg-[#4CAF50] rounded" style={{ width: `${poll.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-[#2E7D32] hover:bg-[#4CAF50] text-white py-2 rounded-lg transition-colors">
                  Cast Your Vote
                </button>
              </div>

              {/* Poll Item 2 */}
              <div className="bg-neutral-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold">Waste Collection Schedule</h4>
                  <span className="bg-[#2E7D32] text-white px-3 py-1 rounded-full text-sm">5 days left</span>
                </div>
                <p className="text-gray-400 mb-6">
                  Choose the preferred waste collection timing for your area.
                </p>
                {/* Progress Bars */}
                <div className="space-y-4">
                  {[
                    { name: 'Early Morning (6-8 AM)', percentage: 55 },
                    { name: 'Late Morning (9-11 AM)', percentage: 25 },
                    { name: 'Evening (4-6 PM)', percentage: 20 },
                  ].map((poll, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span>{poll.name}</span>
                        <span>{poll.percentage}%</span>
                      </div>
                      <div className="h-2 bg-neutral-700 rounded">
                        <div className="h-full bg-[#4CAF50] rounded" style={{ width: `${poll.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-[#2E7D32] hover:bg-[#4CAF50] text-white py-2 rounded-lg transition-colors">
                  Cast Your Vote
                </button>
              </div>
            </div>
          </div>

          {/* Submit Proposal Section */}
          <div className="animate__animated animate__fadeInRight">
            <h3 className="text-2xl font-semibold mb-6">Submit Your Proposal</h3>
            <div className="bg-neutral-800 rounded-xl p-6">
              <form className="space-y-6">
                {/* Initiative Title */}
                <div>
                  <label className="block text-sm font-medium mb-2">Initiative Title</label>
                  <input
                    type="text"
                    className="w-full bg-neutral-700 border-0 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#81C784]"
                    placeholder="Enter your initiative title"
                  />
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select className="w-full bg-neutral-700 border-0 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#81C784]">
                    <option>Waste Management</option>
                    <option>Recycling</option>
                    <option>Green Spaces</option>
                    <option>Community Cleanup</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    className="w-full bg-neutral-700 border-0 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#81C784]"
                    rows="4"
                    placeholder="Describe your initiative"
                  ></textarea>
                </div>

                {/* Expected Impact */}
                <div>
                  <label className="block text-sm font-medium mb-2">Expected Impact</label>
                  <textarea
                    className="w-full bg-neutral-700 border-0 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#81C784]"
                    rows="2"
                    placeholder="Describe the expected impact"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2E7D32] hover:bg-[#4CAF50] text-white py-3 rounded-lg transition-colors font-medium"
                >
                  Submit Proposal
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Voting;
