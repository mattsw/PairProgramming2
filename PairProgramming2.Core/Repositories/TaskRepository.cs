namespace PairProgramming2.Core.Repositories
{
    using Newtonsoft.Json.Linq;
    using System.IO;
    using System;
    using Models;
    using Newtonsoft.Json;
    using System.Collections.Generic;
    public interface ITaskRepository
    {
        JToken GetTasks();
        bool SaveTasks(JToken tasksToSave);
    }

    public class TaskRepository : ITaskRepository
    {
        private JToken Tasks;
        private string TaskPath;

        public TaskRepository(string taskPath)
        {
            this.TaskPath = taskPath;
            this.Tasks = JObject.Parse(File.ReadAllText(taskPath));
        }

        public JToken GetTasks() => Tasks;
       
        public bool SaveTasks(JToken tasksToSave)
        {
            File.WriteAllText(TaskPath, tasksToSave.ToString());
            return true;
        }
    }
}
