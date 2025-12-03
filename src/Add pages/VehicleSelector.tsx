
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
