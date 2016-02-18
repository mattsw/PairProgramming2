namespace PairProgramming2.api
{
    using System.Web.Http;
    using PairProgramming2.Core.Repositories;
    using Newtonsoft.Json.Linq;
    using System;
    public class TaskController : ApiController
    {
        ITaskRepository TaskRepository;

        public TaskController(ITaskRepository taskRepository)
        {
            this.TaskRepository = taskRepository;
        }

        public IHttpActionResult Get() =>
            Ok(TaskRepository.GetTasks());


        public IHttpActionResult Post(JToken tasksToSave) =>
            TaskRepository.SaveTasks(tasksToSave) ? (IHttpActionResult)Ok() : InternalServerError();
    }
}
