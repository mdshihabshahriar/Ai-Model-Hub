import { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({modelPromise}) => {
    const models = use(modelPromise)
    console.log(models)
    return (
        <div className='py-20 max-w-7xl mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Choose Your AI Model</h2>
                <p>One subscription gives you access to all frontier AI models</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    models.map(model => 
                        <ModelCard model={model}></ModelCard>
                    )
                }
            </div>
        </div>
    );
};

export default Models;