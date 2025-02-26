import IntegrationsColumn from "@/components/IntegrationsColumn";
import Tag from "@/components/Tag";
import { integrations } from "@/constants/Integrations";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Integrations() {
    return <section className="py-24 overflow-hidden" id="integrations">
            <div className="container">
                <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">Plays will with <span className="text-lime-400">others</span></h2>
                        <p className="text-white/50 mt-4 text-lg">{text}</p>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2  gap-4 h-[400px] lg:h-[800px] lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] mt-8">
                        <IntegrationsColumn integrations={integrations} />
                        <IntegrationsColumn integrations={integrations.slice().reverse()} reverse className="hidden md:flex"/>
                        </div>
                    </div>
                    </div>
            </div>
        </section>;
}
