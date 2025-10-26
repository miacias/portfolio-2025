"use client";
import {
  Heading,
  Flex,
  TreeView,
  createTreeCollection,
} from "@chakra-ui/react";
import { LuFile, LuFolder } from "react-icons/lu";
import { RiJavascriptLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { DiResponsive } from "react-icons/di";
import { IoAccessibilitySharp } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import {
  TbBrandMysql,
  TbBrandRedux,
  TbSparkles,
  TbSql,
  TbBrandTypescript,
  TbBrandTeams,
  TbBrandVercel,
  TbBrandVite,
} from "react-icons/tb";
import {
  BiLogoGraphql,
  BiLogoJquery,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoMarkdown,
  BiTransfer,
} from "react-icons/bi";
import {
  FaBootstrap,
  FaChrome,
  FaCode,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGit,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaServer,
  FaSlack,
  FaTools,
  FaWindows,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAxios,
  SiCanva,
  SiChakraui,
  SiConfluence,
  SiDiscord,
  SiExcalidraw,
  SiExpress,
  SiHandlebarsdotjs,
  SiHeroku,
  SiInsomnia,
  SiJest,
  SiJira,
  SiJsonwebtokens,
  SiMacos,
  SiMantine,
  SiMocha,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNpm,
  SiNvm,
  SiOracle,
  SiPostman,
  SiSass,
  SiSequelize,
  SiSocketdotio,
  SiSwagger,
  SiZoom,
} from "react-icons/si";


import type { ElementType } from "react";

interface Node {
  id: string;
  name: string;
  icon?: ElementType;
  children?: Node[];
}

const TreeListItem: React.FC<{ icon?: ElementType }> = ({ icon: Icon }) => {
  if (!Icon) return <LuFile />;
  return <Icon />;
};

export const ToolsAndTech = () => {
  const databases = {
    sql: [
      { name: "MySQL", icon: TbBrandMysql },
      { name: "Sequelize ORM", icon: SiSequelize },
      { name: "Oracle PL/SQL", icon: SiOracle },
    ],
    nosql: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
    ],
  };

  const databaseTree = createTreeCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
      id: "ROOT",
      name: "",
      children: [
        {
          id: "sql",
          name: "SQL Databases",
          children: databases.sql.map((db, index) => ({
            id: `sql-${index}`,
            name: db.name,
            icon: db.icon,
          })),
        },
        {
          id: "nosql",
          name: "NoSQL Databases",
          children: databases.nosql.map((db, index) => ({
            id: `nosql-${index}`,
            name: db.name,
            icon: db.icon,
          })),
        },
      ],
    },
  });

  const languages = [
    { name: "JavaScript", icon: RiJavascriptLine },
    { name: "TypeScript", icon: TbBrandTypescript },
    { name: "jQuery", icon: BiLogoJquery },
    { name: "SQL", icon: TbSql },
    { name: "HTML5", icon: BiLogoHtml5 },
    { name: "CSS3", icon: BiLogoCss3 },
    { name: "Markdown", icon: BiLogoMarkdown },
  ];

  const languageTree = createTreeCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
      id: "ROOT",
      name: "",
      children: languages.map((lang, index) => ({
        id: `lang-${index}`,
        name: lang.name,
        icon: lang.icon,
      })),
    },
  });

  const frontend = {
    frameworks: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vite", icon: TbBrandVite },
      { name: "Handlebars.js", icon: SiHandlebarsdotjs },
    ],
    style: [
      { name: "CSS3", icon: BiLogoCss3 },
      { name: "Sass", icon: SiSass },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Telerik Kendo UI" },
      { name: "ReactStrap" },
      { name: "Mantine UI", icon: SiMantine },
      { name: "Chakra UI", icon: SiChakraui },
    ],
    testing: [
      { name: "Jest", icon: SiJest },
      { name: "React Testing Library", icon: FaReact },
    ],
    miscellaneous: [
      { name: "Redux", icon: TbBrandRedux },
      { name: "Axios", icon: SiAxios },
      { name: "Validate.js" },
      { name: "RESTful APIs", icon: BiTransfer },
      { name: "Responsive Design", icon: DiResponsive },
      { name: "Accessibility", icon: IoAccessibilitySharp },
    ],
  };

  const frontendTree = createTreeCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
      id: "ROOT",
      name: "",
      children: Object.entries(frontend).map(([category, items], catIndex) => ({
        id: `cat-${catIndex}`,
        name: category.charAt(0).toUpperCase() + category.slice(1),
        children: items.map((item, itemIndex) => ({
          id: `item-${catIndex}-${itemIndex}`,
          name: item.name,
          icon: item.icon,
        })),
      })),
    },
  });

  const backend = {
    frameworks: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
    ],
    testing: [
      { name: "Mocha", icon: SiMocha },
      { name: "SuperTest", icon: BiTransfer },
    ],
    authentication: [{ name: "JWT Authentication", icon: SiJsonwebtokens }],
    apis: [
      { name: "RESTful APIs", icon: BiTransfer },
      { name: "GraphQL", icon: BiLogoGraphql },
      { name: "Socket.io", icon: SiSocketdotio },
    ],
    logging: [{ name: "Log4js" }, { name: "Axiom" }],
    documentation: [{ name: "Swagger", icon: SiSwagger }],
  };

  const backendTree = createTreeCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
      id: "ROOT",
      name: "",
      children: Object.entries(backend).map(([category, items], catIndex) => ({
        id: `cat-${catIndex}`,
        name: category.charAt(0).toUpperCase() + category.slice(1),
        children: items.map((item, itemIndex) => ({
          id: `item-${catIndex}-${itemIndex}`,
          name: item.name,
          icon: item.icon,
        })),
      })),
    },
  });

  const toolsAndPlatforms = {
    development: [
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
      { name: "Insomnia", icon: SiInsomnia },
      { name: "MongoDB Compass", icon: SiMongodb },
      { name: "npm", icon: SiNpm },
      { name: "nvm (Node Version Manager)", icon: SiNvm },
      { name: "Chrome DevTools", icon: FaChrome },
      { name: "Git", icon: FaGit },
      { name: "Microsoft SQL Server Management Studio" },
      { name: "Oracle SQL Developer" },
    ],
    deployment: [
      { name: "Docker", icon: FaDocker },
      { name: "Heroku", icon: SiHeroku },
      { name: "Vercel", icon: TbBrandVercel },
    ],
    design: [
      { name: "Figma", icon: FaFigma },
      { name: "Canva", icon: SiCanva },
      { name: "Excalidraw", icon: SiExcalidraw },
      { name: "Adobe Photoshop", icon: SiAdobephotoshop },
    ],
    projectManagement: [
      { name: "Jira", icon: SiJira },
      { name: "Confluence", icon: SiConfluence },
    ],
    communication: [
      { name: "Microsoft Teams", icon: TbBrandTeams },
      { name: "Slack", icon: FaSlack },
      { name: "Zoom", icon: SiZoom },
      { name: "Discord", icon: SiDiscord },
    ],
    platforms: [
      { name: "GitHub", icon: FaGithub },
      { name: "Windows", icon: FaWindows },
      { name: "macOS", icon: SiMacos },
    ],
  };

  const toolsAndPlatformsTree = createTreeCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
      id: "ROOT",
      name: "",
      children: Object.entries(toolsAndPlatforms).map(
        ([category, items], catIndex) => ({
          id: `cat-${catIndex}`,
          name: category
            .charAt(0)
            .toUpperCase()
            .concat(category.slice(1).replace(/([A-Z])/g, " $1")),
          children: items.map((item, itemIndex) => ({
            id: `item-${catIndex}-${itemIndex}`,
            name: item.name,
            icon: item.icon,
          })),
        })
      ),
    },
  });

  const practices = {
    methodologies: [
      "Agile Methodologies (Scrum, Kanban)",
      "Test-Driven Development (TDD)",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Pair Programming",
      "Code Reviews",
    ],
    versionControl: [
      "Git",
    ],
    designAndArchitecture: [
      "MVC Architecture",
      "Responsive Web Design",
      "Mobile-First Development",
    ],
    qualityAndSecurity: [
      "Password Manager (e.g. Keeper)",
      "Environment Variables for Sensitive Data",
      "Obsfuscation of Client-Side Code",
    ],
  };

  const bestPracticesTree = createTreeCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
      id: "ROOT",
      name: "",
      children: Object.entries(practices).map(([category, items], catIndex) => ({
        id: `cat-${catIndex}`,
        name: category
          .charAt(0)
          .toUpperCase()
          .concat(category.slice(1).replace(/([A-Z])/g, " $1")),
        children: items.map((practice, index) => ({
          id: `practice-${index}`,
          name: practice,
        })),
      })),
    },
  });

  return (
    <>
      <Heading as="h2" size="2xl" mb="6" textAlign="center">
        Tools & Tech
      </Heading>

      <Flex
        wrap="wrap"
        justify="center"
        gap={8}
        mb="12"
        alignItems="flex-start"
      >
        <TreeView.Root
          collection={bestPracticesTree}
          defaultExpandedValue={['cat-0']}
          maxW="xs"
          backgroundColor="gray.900"
          p={3}
          id="best-practices-tree"
        >
          <TreeView.Label color="brand.primary">
            <Flex gap={3} align="center">
              <TbSparkles />
              <span>Best Practices</span>
            </Flex>
          </TreeView.Label>
          <TreeView.Tree>
            <TreeView.Node
              indentGuide={<TreeView.BranchIndentGuide />}
              render={({ node, nodeState }) =>
                nodeState.isBranch ? (
                  <TreeView.BranchControl color="brand.accent">
                    <LuFolder />
                    <TreeView.BranchText>{node.name}</TreeView.BranchText>
                  </TreeView.BranchControl>
                ) : (
                  <TreeView.BranchControl color="brand.secondary">
                    <TreeListItem icon={node.icon} />
                    <TreeView.ItemText>{node.name}</TreeView.ItemText>
                  </TreeView.BranchControl>
                )
              }
            ></TreeView.Node>
          </TreeView.Tree>
        </TreeView.Root>
        
        <TreeView.Root
          collection={languageTree}
          maxW="xs"
          backgroundColor="gray.900"
          p={3}
          id="language-tree"
        >
          <TreeView.Label color="brand.primary">
            <Flex gap={3} align="center">
              <FaCode />
              <span>Languages</span>
            </Flex>
          </TreeView.Label>
          <TreeView.Tree color="brand.secondary">
            <TreeView.Node
              indentGuide={<TreeView.BranchIndentGuide />}
              render={({ node, nodeState }) =>
                nodeState.isBranch ? (
                  <TreeView.BranchControl>
                    <LuFolder />
                    <TreeView.BranchText>{node.name}</TreeView.BranchText>
                  </TreeView.BranchControl>
                ) : (
                  <TreeView.BranchControl>
                    <TreeListItem icon={node.icon} />
                    <TreeView.ItemText>{node.name}</TreeView.ItemText>
                  </TreeView.BranchControl>
                )
              }
            ></TreeView.Node>
          </TreeView.Tree>
        </TreeView.Root>

        <TreeView.Root
          collection={frontendTree}
          maxW="xs"
          backgroundColor="gray.900"
          p={3}
          id="frontend-tree"
        >
          <TreeView.Label color="brand.primary">
            <Flex gap={3} align="center">
              <CgWebsite />
              <span>Front End</span>
            </Flex>
          </TreeView.Label>
          <TreeView.Tree>
            <TreeView.Node
              indentGuide={<TreeView.BranchIndentGuide />}
              render={({ node, nodeState }) =>
                nodeState.isBranch ? (
                  <TreeView.BranchControl color="brand.accent">
                    <LuFolder />
                    <TreeView.BranchText>{node.name}</TreeView.BranchText>
                  </TreeView.BranchControl>
                ) : (
                  <TreeView.BranchControl color="brand.secondary">
                    <TreeListItem icon={node.icon} />
                    <TreeView.ItemText>{node.name}</TreeView.ItemText>
                  </TreeView.BranchControl>
                )
              }
            ></TreeView.Node>
          </TreeView.Tree>
        </TreeView.Root>

        <TreeView.Root
          collection={backendTree}
          maxW="xs"
          backgroundColor="gray.900"
          p={3}
          id="backend-tree"
        >
          <TreeView.Label color="brand.primary">
            <Flex gap={3} align="center">
              <FaServer />
              <span>Back End</span>
            </Flex>
          </TreeView.Label>
          <TreeView.Tree>
            <TreeView.Node
              indentGuide={<TreeView.BranchIndentGuide />}
              render={({ node, nodeState }) =>
                nodeState.isBranch ? (
                  <TreeView.BranchControl color="brand.accent">
                    <LuFolder />
                    <TreeView.BranchText>{node.name}</TreeView.BranchText>
                  </TreeView.BranchControl>
                ) : (
                  <TreeView.BranchControl color="brand.secondary">
                    <TreeListItem icon={node.icon} />
                    <TreeView.ItemText>{node.name}</TreeView.ItemText>
                  </TreeView.BranchControl>
                )
              }
            ></TreeView.Node>
          </TreeView.Tree>
        </TreeView.Root>

        <TreeView.Root
          collection={databaseTree}
          defaultExpandedValue={["sql", "nosql"]}
          maxW="xs"
          backgroundColor="gray.900"
          p={3}
          id="database-tree"
        >
          <TreeView.Label color="brand.primary">
            <Flex gap={3} align="center">
              <FaDatabase />
              <span>Databases</span>
            </Flex>
          </TreeView.Label>
          <TreeView.Tree>
            <TreeView.Node
              indentGuide={<TreeView.BranchIndentGuide />}
              render={({ node, nodeState }) =>
                nodeState.isBranch ? (
                  <TreeView.BranchControl color="brand.accent">
                    <LuFolder />
                    <TreeView.BranchText>{node.name}</TreeView.BranchText>
                  </TreeView.BranchControl>
                ) : (
                  <TreeView.BranchControl color="brand.secondary">
                    <TreeListItem icon={node.icon} />
                    <TreeView.ItemText>{node.name}</TreeView.ItemText>
                  </TreeView.BranchControl>
                )
              }
            ></TreeView.Node>
          </TreeView.Tree>
        </TreeView.Root>
      
        <TreeView.Root
          collection={toolsAndPlatformsTree}
          maxW="xs"
          backgroundColor="gray.900"
          p={3}
          id="tools-and-platforms-tree"
        >
          <TreeView.Label color="brand.primary">
            <Flex gap={3} align="center">
              <FaTools />
              <span>Tools and Platforms</span>
            </Flex>
          </TreeView.Label>
          <TreeView.Tree>
            <TreeView.Node
              indentGuide={<TreeView.BranchIndentGuide />}
              render={({ node, nodeState }) =>
                nodeState.isBranch ? (
                  <TreeView.BranchControl color="brand.accent">
                    <LuFolder />
                    <TreeView.BranchText>{node.name}</TreeView.BranchText>
                  </TreeView.BranchControl>
                ) : (
                  <TreeView.BranchControl color="brand.secondary">
                    <TreeListItem icon={node.icon} />
                    <TreeView.ItemText>{node.name}</TreeView.ItemText>
                  </TreeView.BranchControl>
                )
              }
            ></TreeView.Node>
          </TreeView.Tree>
        </TreeView.Root>
      </Flex>
    </>
  );
};
