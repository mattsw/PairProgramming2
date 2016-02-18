namespace PairProgramming2.Core
{
    using Autofac;
    using Repositories;
    using System.Web;
    using System.Configuration;

    public class AutofacRegistrar : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.Register(catRepository =>
                new CatRepository(HttpContext.Current.Server.MapPath(
                        ConfigurationManager.AppSettings["catsPath"])))
                        .As<ICatRepository>().SingleInstance();

            builder.Register(taskRepository =>
                new TaskRepository(HttpContext.Current.Server.MapPath(
                    ConfigurationManager.AppSettings["tasksPath"]
                    ))).As<ITaskRepository>().SingleInstance();
        }
    }
}
