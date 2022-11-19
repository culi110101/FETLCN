import {configureStore} from '@reduxjs/toolkit'

import accountReducer from './entities/account'
import userReducer from './entities/user'
import appliedReducer from './entities/applied'
import categoryReducer from './entities/category'
import categoryJobReducer from './entities/categoryJob'
import commentReducer from './entities/comment'
import employerReducer from './entities/employer'
import freelancerReducer from './entities/freelancer'
import jobReducer from './entities/job'
import searchReducer from './entities/search'
import skillReducer from './entities/skill'
import userSkillReducer from './entities/userSkill'
import packageReducer from './entities/package'

export const store = configureStore({
    reducer: {
        account: accountReducer,
        user: userReducer,
        applied: appliedReducer,
        category: categoryReducer,
        categoryJob: categoryJobReducer,
        comment: commentReducer,
        employer: employerReducer,
        freelancer: freelancerReducer,
        job: jobReducer,
        search: searchReducer,
        skill: skillReducer,
        userSkill: userSkillReducer,
        package: packageReducer
    }
})

