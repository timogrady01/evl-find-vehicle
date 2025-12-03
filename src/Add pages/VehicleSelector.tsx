
import { useEffect, useState } from "react";
import { fetchMakes, fetchModels, fetchTrims } from "../services/carApi";

export default function VehicleSelector() {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [trims, setTrims] = useState([]);
  const [selectedMake, setSelectedMake] = useState<number | null>(null);
  const [selectedModel, setSelectedModel] = useState<number | null>(null);
  const [selectedTrim, setSelectedTrim] = useState<any>(null);

  useEffect(() => {
    fetchMakes().then(data => setMakes(data));
  }, []);

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const makeId = parseInt(e.target.value);
    setSelectedMake(makeId);
    setModels([]);
    setTrims([]);
    setSelectedTrim(null);
    fetchModels(makeId).then(data => setModels(data));
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const modelId = parseInt(e.target.value);
    setSelectedModel(modelId);
    setTrims([]);
    setSelectedTrim(null);
    fetchTrims(modelId).then(data => setTrims(data));
  };

  const handleTrimChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const trimId = parseInt(e.target.value);
    const trim = trims.find((t: any) => t.id === trimId);
    setSelectedTrim(trim);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        EVL Vehicle Selector
      </h1>

      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {/* Makes Dropdown */}
        <select onChange={handleMakeChange} className="px-4 py-2 border rounded-lg">
          <option value="">Choose Make</option>
          {makes.map((make: any) => (
            <option key={make.id} value={make.id}>{make.name}</option>
          ))}
        </select>

        {/* Models Dropdown */}
        {models.length > 0 && (
          <select onChange={handleModelChange} className="px-4 py-2 border rounded-lg">
            <option value="">Choose Model</option>
            {models.map((model: any) => (
              <option key={model.id} value={model.id}>{model.name}</option>
            ))}
          </select>
        )}

        {/* Trims Dropdown */}
        {trims.length > 0 && (
          <select onChange={handleTrimChange} className="px-4 py-2 border rounded-lg">
            <option value="">Choose Trim</option>
            {trims.map((trim: any) => (
              <option key={trim.id} value={trim.id}>{trim.name}</option>
            ))}
          </select>
        )}
      </div>

      {/* Vehicle Details Card */}
      {selectedTrim && (
        <div className="max-w-md mx-auto mt-6 bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold text-blue-600">{selectedTrim.name}</h2>
          <p className="text-gray-700">Year: {selectedTrim.year}</p>
          <p className="text-gray-700">MSRP: {selectedTrim.msrp ? `$${selectedTrim.msrp}` : "N/A"}</p>
          <p className="text-gray-500">Body: {selectedTrim.body_type || "N/A"}</p>
        </div>
      )}
    </div>
  );
}
