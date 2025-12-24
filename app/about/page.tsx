import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                About Kasparro
              </h1>
              <p className="text-xl text-gray-600">
                Building the future of brand intelligence for the AI-first search era.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-6 items-start mb-12">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    Search is fundamentally changing. AI models like ChatGPT, Perplexity, and Gemini 
                    are becoming the primary way people discover information, products, and brands.
                  </p>
                  <p className="text-lg text-gray-600">
                    Yet most brands are blind to this shift. Traditional SEO tools measure Google 
                    rankings while ignoring the AI-powered search engines that are already shaping 
                    brand perception and driving purchase decisions.
                  </p>
                  <p className="text-lg text-gray-600 mt-4">
                    <strong>Our mission is simple:</strong> Give brands the intelligence and tools 
                    they need to win in the AI-first search era.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Philosophy */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-6 items-start mb-12">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Philosophy</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Data-Driven, Not Opinion-Driven</CardTitle>
                      </CardHeader>
                      <CardContent className="text-gray-600">
                        Every score, insight, and recommendation in Kasparro is backed by real data 
                        from AI search engines. We measure actual AI model behavior, not what we 
                        think might work.
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">System Thinking</CardTitle>
                      </CardHeader>
                      <CardContent className="text-gray-600">
                        AI-SEO isn&apos;t about individual tactics. It&apos;s about building 
                        comprehensive topical authority, demonstrating E-E-A-T, and creating 
                        content that AI models can understand and trust. We help you see the 
                        complete picture.
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Actionable Over Impressive</CardTitle>
                      </CardHeader>
                      <CardContent className="text-gray-600">
                        Fancy dashboards don&apos;t improve rankings. Clear, prioritized 
                        recommendations do. We focus on telling you exactly what to do, why it 
                        matters, and how much effort it will take.
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Built for Product Teams</CardTitle>
                      </CardHeader>
                      <CardContent className="text-gray-600">
                        AI-SEO isn&apos;t just marketing - it touches product, content, engineering, 
                        and brand. Kasparro is designed to serve entire teams, with insights relevant 
                        to each discipline.
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Vision for AI-First Search
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">
                    We believe the next decade of search will be defined by AI models, not 
                    traditional search engines. These models will:
                  </p>
                  <ul className="space-y-3 text-gray-600 text-lg">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>
                        <strong>Understand context</strong> over keywords, favoring comprehensive 
                        topical coverage over exact-match optimization
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>
                        <strong>Prioritize trust signals</strong> like E-E-A-T, authorship, and 
                        third-party validation over backlink counts
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>
                        <strong>Synthesize information</strong> from multiple sources rather than 
                        ranking individual pages
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span>
                        <strong>Answer questions directly</strong> instead of sending users to 
                        websites, making brand perception more important than traffic
                      </span>
                    </li>
                  </ul>
                  <p className="text-lg text-gray-600 mt-6">
                    Brands that understand and adapt to these shifts will dominate their industries. 
                    Those that don&apos;t will become invisible.
                  </p>
                  <p className="text-lg text-gray-600 mt-4">
                    <strong>Kasparro exists to ensure you&apos;re in the first group.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team/Founder Note */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Built by Engineers, For Brands</h2>
              <p className="text-lg opacity-90 mb-6">
                Kasparro is founded by experienced product engineers who have built AI systems, 
                scaled platforms, and understand the technical and strategic challenges of 
                modern brand building.
              </p>
              <p className="text-lg opacity-90">
                We&apos;re not an agency making promises. We&apos;re engineers building tools that 
                give you the data and clarity you need to make smart decisions.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
