namespace PairProgramming2.Models
{
    public enum SkillLevel
    {
        Noob,
        Average,
        Pro,
        BadAss
    }

    public class Developer
    {
        public string Name;
        public SkillLevel DevSkillLevel;

        public Developer()
        {
            
        }
    }
}