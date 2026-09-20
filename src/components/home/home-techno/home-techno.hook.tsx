import ReactImage from '../../../assets/image/react.png';
import VueImage from '../../../assets/image/vue.png';
import AngularImage from '../../../assets/image/angular.png';
import JsImage from '../../../assets/image/js.png';
import HtmlImage from '../../../assets/image/html.png';
import CssImage from '../../../assets/image/css.png';
import TailwindImage from '../../../assets/image/tailwindCSS.png';
import StoryBookImage from '../../../assets/image/storybook.png';
import AtomicDesignImage from '../../../assets/image/atomic-design.png';
import GitImage from '../../../assets/image/git.png';
import GitlabCiImage from '../../../assets/image/gitlab-ci.png';
import GithubActions from '../../../assets/image/github-actions.png';
import TypescriptImage from '../../../assets/image/typescript.png';
import GraphqlImage from '../../../assets/image/graphQL.png';
import DockerImage from '../../../assets/image/docker.png';
import NxImage from '../../../assets/image/nx.svg';
import AwsImage from '../../../assets/image/aws.png';
import JestImage from '../../../assets/image/jest.png';
import MochaImage from '../../../assets/image/mocha.png';
import ChaiImage from '../../../assets/image/chai.png';
import PhpunitImage from '../../../assets/image/phpunit.png';
import PytestImage from '../../../assets/image/pytest.svg';
import CypressImage from '../../../assets/image/cypress.png';
import PlaywrightImage from '../../../assets/image/playwright.png';
import PostgresImage from '../../../assets/image/postgres.png';
import MongoImage from '../../../assets/image/mongo.png';
import MysqlImage from '../../../assets/image/mysql.png';
import SqlImage from '../../../assets/image/sql.svg';
import SequelizeImage from '../../../assets/image/sequelize.png';
import TypeormImage from '../../../assets/image/typeorm.png';
import MongooseImage from '../../../assets/image/mongoose.jpg';
import DoctrineImage from '../../../assets/image/doctrine.png';
import SqlAlchemyImage from '../../../assets/image/sqlalchemy.png';
import NodeImage from '../../../assets/image/node.svg';
import NestImage from '../../../assets/image/nest.png';
import PhpImage from '../../../assets/image/php.png';
import SymfonyImage from '../../../assets/image/symfony.png';
import PythonImage from '../../../assets/image/python.png';
import PyramidImage from '../../../assets/image/pyramid.png';
import FlaskImage from '../../../assets/image/flask.png';
import ClaudeCodeImage from '../../../assets/image/claude-code.svg';
import JavaImage from '../../../assets/image/java.svg';
import SpringBootImage from '../../../assets/image/spring-boot.svg';
import HibernateImage from '../../../assets/image/hibernate.svg';
import JunitImage from '../../../assets/image/junit.svg';
import ElasticsearchImage from '../../../assets/image/elasticsearch.svg';
import LogstashImage from '../../../assets/image/logstash.svg';
import ArgoCdImage from '../../../assets/image/argocd.svg';
import KibanaImage from '../../../assets/image/kibana.svg';
import KubernetesImage from '../../../assets/image/kubernetes.svg';
import CodexImage from '../../../assets/image/codex.svg';
import CursorImage from '../../../assets/image/cursor.svg';
import JetbrainsAiImage from '../../../assets/image/jetbrains-ai.svg';

export const useHomeTechno = () => {
  const FRONT_END_ROWS = [
    [
      {
        url: 'https://react.dev/',
        image: ReactImage,
        tooltipText: 'React',
      },
      {
        url: 'https://vuejs.org/',
        image: VueImage,
        tooltipText: 'Vue 2&3',
      },
      {
        url: 'https://angular.dev/',
        image: AngularImage,
        tooltipText: 'Angular',
      },
    ],
    [
      {
        image: JsImage,
        tooltipText: 'Javascript',
      },
      {
        image: HtmlImage,
        tooltipText: 'HTML5',
      },
      {
        image: CssImage,
        tooltipText: 'CSS3',
      },
    ],
    [
      {
        url: 'https://tailwindcss.com/',
        image: TailwindImage,
        tooltipText: 'TailwindCSS',
      },
      {
        url: 'https://storybook.js.org',
        image: StoryBookImage,
        tooltipText: 'Storybook',
      },
      {
        url: 'https://bradfrost.com/blog/post/atomic-web-design/',
        image: AtomicDesignImage,
        tooltipText: 'Atomic design',
      },
    ],
  ];

  const BACK_END_ROWS = [
    [
      {
        url: 'https://nodejs.org',
        image: NodeImage,
        tooltipText: 'Node.js',
      },
      {
        url: 'https://nestjs.com/',
        image: NestImage,
        tooltipText: 'Nest.js',
      },
    ],
    [
      {
        image: PhpImage,
        tooltipText: 'PHP',
      },
      {
        url: 'https://nestjs.com/',
        image: SymfonyImage,
        tooltipText: 'Symfony',
      },
    ],
    [
      {
        image: PythonImage,
        tooltipText: 'Python',
      },
      {
        url: 'https://trypyramid.com/',
        image: PyramidImage,
        tooltipText: 'Pyramid (Python Web Framework)',
      },
      {
        url: 'https://flask.palletsprojects.com/',
        image: FlaskImage,
        tooltipText: 'Flask',
      },
    ],
    [
      {
        url: 'https://www.java.com/',
        image: JavaImage,
        tooltipText: 'Java',
      },
      {
        url: 'https://spring.io/projects/spring-boot',
        image: SpringBootImage,
        tooltipText: 'Spring Boot',
      },
    ],
  ];

  const DATABASE_ROWS = [
    [
      {
        url: 'https://www.postgresql.org/',
        image: PostgresImage,
        tooltipText: 'PostgreSQL',
      },
      {
        url: 'https://www.mongodb.com/',
        image: MongoImage,
        tooltipText: 'MongoDB',
      },
      {
        url: 'https://www.mysql.com/',
        image: MysqlImage,
        tooltipText: 'MySQL',
      },
    ],
    [
      {
        image: SqlImage,
        tooltipText: 'SQL',
      },
      {
        url: 'https://sequelize.org/',
        image: SequelizeImage,
        tooltipText: 'Sequelize',
      },
      {
        url: 'https://typeorm.io/',
        image: TypeormImage,
        tooltipText: 'TypeORM',
      },
    ],
    [
      {
        url: 'https://mongoosejs.com/',
        image: MongooseImage,
        tooltipText: 'Mongoose',
      },
      {
        url: 'https://www.doctrine-project.org/',
        image: DoctrineImage,
        tooltipText: 'Doctrine',
      },
      {
        url: 'https://www.sqlalchemy.org/',
        image: SqlAlchemyImage,
        tooltipText: 'SQL Alchemy',
      },
    ],
    [
      {
        url: 'https://hibernate.org/',
        image: HibernateImage,
        tooltipText: 'Hibernate',
      },
    ],
  ];
  const TESTING_ROWS = [
    [
      {
        url: 'https://jestjs.io/',
        image: JestImage,
        tooltipText: 'Jest',
      },
      {
        url: 'https://mochajs.org/',
        image: MochaImage,
        tooltipText: 'Mocha',
      },
      {
        url: 'https://www.chaijs.com/',
        image: ChaiImage,
        tooltipText: 'Chai',
      },
    ],
    [
      {
        url: 'https://phpunit.de/index.html',
        image: PhpunitImage,
        tooltipText: 'PHP Unit',
      },
      {
        url: 'https://docs.pytest.org/en/8.2.x/',
        image: PytestImage,
        tooltipText: 'Pytest',
      },
    ],
    [
      {
        url: 'https://www.cypress.io/',
        image: CypressImage,
        tooltipText: 'Cypress',
      },
      {
        url: 'https://playwright.dev/',
        image: PlaywrightImage,
        tooltipText: 'Playwright',
      },
      {
        url: 'https://junit.org/junit5/',
        image: JunitImage,
        tooltipText: 'JUnit',
      },
    ],
  ];
  const WORKFLOW_ROWS = [
    [
      {
        url: 'https://git-scm.com/',
        image: GitImage,
        tooltipText: 'Git',
      },
      {
        url: 'https://docs.gitlab.com/ee/ci/',
        image: GitlabCiImage,
        tooltipText: 'Gitlab CI/CD',
      },
      {
        url: 'https://github.com/features/actions',
        image: GithubActions,
        tooltipText: 'Github actions',
      },
    ],
    [
      {
        url: 'https://www.typescriptlang.org/',
        image: TypescriptImage,
        tooltipText: 'Typescript',
      },
      {
        url: 'https://graphql.org/',
        image: GraphqlImage,
        tooltipText: 'GraphQL',
      },
      {
        url: 'https://www.docker.com/',
        image: DockerImage,
        tooltipText: 'Docker',
      },
    ],
    [
      {
        url: 'https://nx.dev',
        image: NxImage,
        tooltipText: 'Nx monorepo',
      },
      {
        url: 'https://aws.amazon.com/',
        image: AwsImage,
        tooltipText: 'Amazon Web Services',
      },
    ],
    [
      {
        url: 'https://kubernetes.io/',
        image: KubernetesImage,
        tooltipText: 'Kubernetes',
      },
      {
        url: 'https://argo-cd.readthedocs.io/',
        image: ArgoCdImage,
        tooltipText: 'Argo CD',
      },
    ],
    [
      {
        url: 'https://www.elastic.co/elasticsearch',
        image: ElasticsearchImage,
        tooltipText: 'ELK - Elasticsearch',
      },
      {
        url: 'https://www.elastic.co/logstash',
        image: LogstashImage,
        tooltipText: 'ELK - Logstash',
      },
      {
        url: 'https://www.elastic.co/kibana',
        image: KibanaImage,
        tooltipText: 'ELK - Kibana',
      },
    ],
  ];

  const AI_ROWS = [
    [
      {
        url: 'https://www.anthropic.com/claude-code',
        image: ClaudeCodeImage,
        tooltipText: 'Claude Code',
      },
      {
        url: 'https://openai.com/codex/',
        image: CodexImage,
        tooltipText: 'Codex',
      },
    ],
    [
      {
        url: 'https://cursor.com',
        image: CursorImage,
        tooltipText: 'Cursor',
      },
      {
        url: 'https://www.jetbrains.com/ai/',
        image: JetbrainsAiImage,
        tooltipText: 'JetBrains AI',
      },
    ],
  ];

  return {
    frondEndRows: FRONT_END_ROWS,
    backEndRows: BACK_END_ROWS,
    databaseRows: DATABASE_ROWS,
    testingRows: TESTING_ROWS,
    workflowRows: WORKFLOW_ROWS,
    aiRows: AI_ROWS,
  };
};
