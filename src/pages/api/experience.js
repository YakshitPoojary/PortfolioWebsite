import data2 from './experience.json';

export const getExperience = () => {
  return data2;
};

export default (req, res) => {
  const experience = getExperience();
  res.json(experience);
};