
import validator from 'validator';

const validateCreateBlending = (data) => {
    let errors = {};

    const { name_ko, name_en,category_id,raw_material_id,sub_raw_materials_ko ,sub_raw_materials_en,pill_id,tags_ko,tags_en,efficiency_ko,efficiency_en
        ,ingredients_ko,ingredients_en,description_ko,description_en,state,file} = data;

    if (validator.isEmpty(name_ko)) {
        errors.name_ko = '블렌딩 이름을 입력해 주세요';
    }
    if (validator.isEmpty(name_en)) {
        errors.name_en = '블렌딩 이름을 입력해 주세요';
    }

    if (validator.isEmpty(category_id)) {
        errors.category_id = '카테고리를 입력하십시오';
    }
    if (validator.isEmpty(raw_material_id)) {
        errors.raw_material_id = '원료를 입력하십시오';
    }
    if (validator.isEmpty(sub_raw_materials_ko)) {
        errors.sub_raw_materials_ko = '서브 원시를 입력하십시오';
    }
    if (validator.isEmpty(sub_raw_materials_en)) {
        errors.sub_raw_materials_en = '서브 원시를 입력하십시오';
    }
    if (validator.isEmpty(pill_id)) {
        errors.pill_id = '알약을 입력하십시오';
    }
    if (validator.isEmpty(tags_ko)) {
        errors.tags_ko = '태그를 입력하십시오(ko)';
    }
    if (validator.isEmpty(tags_en)) {
        errors.tags_en = '태그를 입력하십시오(en)';
    }
    if (validator.isEmpty(efficiency_ko)) {
        errors.efficiency_ko = '효율성을 입력하십시오(ko)';
    }
    if (validator.isEmpty(efficiency_en)) {
        errors.efficiency_en = '효율성을 입력하십시오(en)';
    }
    if (validator.isEmpty(ingredients_ko)) {
        errors.ingredients_ko = '재료입력해주세요(ko)';
    }
    if (validator.isEmpty(ingredients_en)) {
        errors.ingredients_en = '재료입력해주세요(en)';
    }
    if (validator.isEmpty(description_ko)) {
        errors.description_ko = '설명을 입력해 주세요(ko)';
    }
    if (validator.isEmpty(description_en)) {
        errors.description_en = '설명을 입력해 주세요(en)';
    }

    if (validator.isEmpty(state)) {
        errors.state = '선택 해주세요';
    }
    
    
    if (validator.isEmpty(file)) {
        errors.file = '파일을 업로드 해주세요';
    }

    
    return {
        isInvalid: Object.keys(errors).length > 0,
        error: errors,
    };
};

export default validateCreateBlending;
