import Head from "next/head";
import { Layout } from "../../layout/Layout";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import styled from "styled-components";
import { caseStudies, caseStudyContent } from "../../constants/constants";
import {
  PageWrapper,
  HeroImageContainer,
  HeroImg,
  Content,
  SectionBlock,
  Heading,
  Body,
  List,
  ListItem,
} from "../../components/CaseStudy/CaseStudyStyles";

export default function CaseStudyPage({ slug, content }) {
  if (!content) return null;
  const title = content.title;
  const heroImage = content.heroImage;
  const sections = content.sections || [];
  const SectionHeading = styled(SectionTitle)`
    font-family: ${({ theme }) => theme.fonts.black};
    text-align: center;
  `;

  return (
    <Layout>
      <Head>
        <title>{`${title} | Case Study | Josh Scanlan`}</title>
        <meta name="description" content={`${title} case study`} />
        <link
          rel="canonical"
          href={`https://joshscanlan.dev/case-studies/${slug}`}
        />
        <meta property="og:title" content={`${title} | Case Study`} />
        <meta
          property="og:url"
          content={`https://joshscanlan.dev/case-studies/${slug}`}
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:type" content="article" />
      </Head>
      <Section>
        <PageWrapper>
          <SectionHeading>{title}</SectionHeading>
          <HeroImageContainer>
            <HeroImg
              src={heroImage}
              alt={title}
              layout="fill"
              objectFit="contain"
              priority
            />
          </HeroImageContainer>
          <Content>
            {sections.map(({ heading, body, bullets }, idx) => (
              <SectionBlock key={idx}>
                <Heading>{heading}</Heading>
                {body && <Body>{body}</Body>}
                {Array.isArray(bullets) && bullets.length > 0 ? (
                  <List>
                    {bullets.map((item, i) => (
                      <ListItem key={i}>{item}</ListItem>
                    ))}
                  </List>
                ) : null}
              </SectionBlock>
            ))}
          </Content>
        </PageWrapper>
      </Section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = caseStudies.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const content = caseStudyContent[slug] || null;
  if (!content) {
    return { notFound: true };
  }
  return {
    props: {
      slug,
      content,
    },
  };
}
