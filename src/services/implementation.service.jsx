import axios from 'axios';
import { authHeader } from './auth.header';
import config from "../environment/config";
const API_URL = config.API_URL;


export const addNewImplementationDocRelease = async (qaQTAddVerionDto) => {
    try {
        return (await axios.post(`${API_URL}add-new-impl-doc-version`, qaQTAddVerionDto, { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in addNewImplementationDocRelease', error);
        throw error;
    }
}



export const getImplDataAddedTemplates = async (projectId) => {
    try {
        const response = await axios.get(`${API_URL}getImplDocDataAddedTemplates.htm`, {
            params: { projectId }, 
            headers: {
                'Content-Type': 'application/json',
                ...authHeader(), 
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error occurred in getImplDataAddedTemplates', error);
        throw error;
    }
};


export const getAllImplDocVersionDtoListByProject = async (projectSelDto) => {
    try {
        return (await axios.post(`${API_URL}impl-doc-version-list-by-project`, projectSelDto, 
            { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in getAllImplDocVersionDtoListByProject', error);
        throw error;
    }
    
}


//getNotReqAbbreviationIdsSRS

export const getNotReqAbbreviationIdsImpl = async (DocVersionReleaseId) => {
    try {
        return (await axios.post(`${API_URL}get-impl-not-req-abbreviation-ids`, DocVersionReleaseId, { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in getNotReqAbbreviationIds', error);
        throw error;
    }
}



export const updateImplNotReqAbbreviationIds = async (qaqtDocAbbreviations, DocVersionReleaseId) => {
    try {
        const AbbreviationIds=[qaqtDocAbbreviations, DocVersionReleaseId]
        return (await axios.post(`${API_URL}update-not-impl-req-abbreviation-ids`, AbbreviationIds, { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in updateImplNotReqAbbreviationIds', error);
        throw error;
    }
}



export const addImplSubChapterNameByChapterId = async (chapterName) => {
    try {
        return (await axios.post(`${API_URL}add-impl-new-sub-chapter-by-id`, chapterName, 
            { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in addSubChapterNameByChapterId', error);
        throw error;
    }
}


export const deleteImplChapterByChapterId = async (chapterId) => {
    try {
        return (await axios.post(`${API_URL}delete-impl-chapter-by-id`, chapterId, { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in deleteChapterById', error);
        throw error;
    }
}


export const updateImplchapterPagebreakAndLandscape = async (chapterPagebreakOrLandscape) => {
    try {
        return (await axios.post(`${API_URL}updateImplchapterPagebreakAndLandscape`, chapterPagebreakOrLandscape, { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in updatechapterPagebreakAndLandscape', error);
        throw error;
    }
}



export const updateImplChapterNameById = async (chapterName) => {
    try {
        return (await axios.post(`${API_URL}update-impl-chapter-name-by-id`, chapterName,
             { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in updateChapterNameById', error);
        throw error;
    }
}


export const updateImplChapterContent = async (chaperContent) => {
    try {
        return (await axios.post(`${API_URL}update-impl-chapter-content-by-id`, chaperContent, 
            { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in updateChapterContent', error);
        throw error;
    }
}


export const updateImplChapterBySnNo = async (values) => {
    try {
       const arrayValues = Array.from(values,([id,value]) => ({id,value}))
        return (await axios.put(`${API_URL}update-impl-chapter-by-sn-no`, arrayValues, 
            { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        throw error;
    }
}

export const getImplSubChaptersById = async (chapterId) => {
    try {
        return (await axios.post(`${API_URL}ImplSubChaptersById`, chapterId, { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in getSubChaptersById', error);
        throw error;
    }
}

export const getImplMainChapters = async (projectSelDto,docversionReleaseId) => {
    try {
        
          const body = { ...projectSelDto, docversionReleaseId};
        return (await axios.post(`${API_URL}impl-docx-main-chapter-list`, body,
             { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in getUserManualMainChapters', error);
        throw error;
    }
}


class implDocSections {
    constructor(
      sectionId = 0,
      sectionName = '',
      projectId,
      createdBy,
      createdDate,
      modifiedBy,
      modifiedDate ,
      isActive = 0,
       docVersionReleaseId =0
    ) {
      this.sectionId = sectionId;
      this.sectionName = sectionName;
      this.projectId = projectId;
      this.createdBy = createdBy;
      this.createdDate = createdDate;
      this.modifiedBy = modifiedBy;
      this.modifiedDate = modifiedDate;
      this.isActive = isActive;
      this.docVersionReleaseId=docVersionReleaseId;
    }
  }

  export default implDocSections;

   export const addImplNewChapterSection = async (srsDocSections) => {
      try {
         
          return (await axios.post(`${API_URL}impl-add-new-section`, srsDocSections, 
              { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
      } catch (error) {
          console.error('Error occurred in addNewChapter', error);
          throw error;
      }
  }


  export const ImplAddListToAddList = async (addSectionIdsDto) => {
      try {
          return (await axios.post(`${API_URL}impl-unadd-list-to-add-list`, addSectionIdsDto, { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
      } catch (error) {
          throw error;
      }
  }

  export const getImplUnAddedChapterlist = async (projectSelDto) => {
    try {
        return (await axios.post(`${API_URL}impl-unadded-chapter-list`, projectSelDto,
             { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in getImplUnAddedChapterlist', error);
        throw error;
    }
}

export const updateImplTableContent = async (docContentDto) => {
    try {
        return (await axios.post(`${API_URL}update-impl-table-content`, docContentDto, { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in updateUserManualTableContent', error);
    }
}

export const addImplTableContent = async (docContentDto) => {
    try {
        return (await axios.post(`${API_URL}add-impl-table-content`, docContentDto, { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in addImplTableContent', error);
    }
}


export const getImplTableContentList = async (qaqtDocTypeAndProjectDto) => {
    try {
        return (await axios.post(`${API_URL}get-impl-table-content-list`, qaqtDocTypeAndProjectDto, { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in getImplTableContentList', error);
    }
}


export const getImplTableContentById = async (contentId) => {
    try {
        return (await axios.post(`${API_URL}get-impl-table-content-by-id`, contentId, { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in getUserManualTableContentById', error);
    }
}


export const getImplAllChapters = async (projectSelDto) => {
    try {
        return (await axios.post(`${API_URL}impl-all-chapter-list`, projectSelDto,
             { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in getImplAllChapters', error);
        throw error;
    }
}



export const getImplApprovedDocListByProject = async (qaqtDocTypeAndProjectDto) => {
    try {
        return (await axios.post(`${API_URL}approved-user-manual-doc-list-by-project`, qaqtDocTypeAndProjectDto, { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        console.error('Error occurred in getApprovedDocListByProject', error);
        throw error;
    }
}

export const getImplDocRevisionRecordById = async (docVersionReleaseId) => {
    try {
        return (await axios.post(`${API_URL}get-impl-doc-revision-record`,
             docVersionReleaseId, 
             { headers: { 'Content-Type': 'application/json', ...authHeader() } })).data;
    } catch (error) {
        throw error;
    }
}